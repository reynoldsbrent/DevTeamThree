using api.Data;
using api.Dtos;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;
        private readonly ILogger<ArticlesController> _logger;
        private const string BaseUrl = "https://api.cloudflare.com/client/v4/accounts";

        public ArticlesController(ApplicationDBContext context, IConfiguration configuration, HttpClient httpClient, ILogger<ArticlesController> logger)
        {
            _context = context;
            _configuration = configuration;
            _httpClient = httpClient;
            _logger = logger;

        }

        // GET: api/articles/today
        // Returns today's articles from the database
        [HttpGet("today")]
        public async Task<ActionResult<IEnumerable<ArticleResponseDto>>> GetTodaysArticles()
        {
            var today = DateTime.Now.Date;
            var articles = await _context.Articles.Include(a => a.Authors).Where(a => a.PublishedDate.Date == today).Select(a => new ArticleResponseDto
            {
                ID = a.ID,
                Title = a.Title,
                Link = a.Link,
                Excerpt = a.Excerpt,
                Summary = a.Summary,
                Topic = a.Topic,
                PublishedDate = a.PublishedDate,
                Authors = a.Authors.Select(auth => new AuthorDto
                {
                    ID = auth.ID,
                    Name = auth.Name
                }).ToList()
            }).ToListAsync();

            return Ok(articles);
        }

        // GET: api/articles/all
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<ArticleResponseDto>>> GetAllArticles()
        {
            var articles = await _context.Articles
                .Include(a => a.Authors)
                .OrderByDescending(a => a.PublishedDate)
                .Select(a => new ArticleResponseDto
                {
                    ID = a.ID,
                    Title = a.Title,
                    Link = a.Link,
                    Excerpt = a.Excerpt,
                    Summary = a.Summary,
                    Topic = a.Topic,
                    PublishedDate = a.PublishedDate,
                    Authors = a.Authors.Select(auth => new AuthorDto
                    {
                        ID = auth.ID,
                        Name = auth.Name
                    }).ToList()
                })
                .ToListAsync();

            return Ok(articles);
        }

        // GET: api/articles/{id}
        // Returns a specific article with full details
        [HttpGet("{id}")]
        public async Task<ActionResult<Article>> GetArticle(int id)
        {
            var article = await _context.Articles.Include(a => a.Authors).FirstOrDefaultAsync(a => a.ID == id);

            if (article == null)
            {
                return NotFound();
            }

            var response = new ArticleResponseDto
            {
                ID = article.ID,
                Title = article.Title,
                PublishedDate = article.PublishedDate,
                Link = article.Link,
                Excerpt = article.Excerpt,
                Summary = article.Summary,
                Topic = article.Topic,
                Authors = article.Authors?.Select(a => new AuthorDto
                {
                    ID = a.ID,
                    Name = a.Name
                }).ToList()
            };

            return Ok(response);
        }

        // POST: api/articles/fetch-and-process
        // Fetches new articles and processes them (to be called by a background service)
        [HttpPost("fetch-and-process")]
        public async Task<ActionResult> FetchAndProcessArticles()
        {
            try
            {
                // Check if articles are already fetched for today
                var today = DateTime.Now.Date;
                var existingArticles = await _context.Articles.AnyAsync(a => a.PublishedDate.Date == today);

                if (existingArticles)
                {
                    return Ok("Articles already fetched for today");
                }

                // Fetch articles from news API

                // Set up HTTP client for Newscatcher API
                var newsApiKey = _configuration["NewsAPI:Key"];
                _httpClient.DefaultRequestHeaders.Add("x-api-key", newsApiKey);

                //Create the request
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri("https://api.newscatcherapi.com/v2/latest_headlines?lang=en&ranked_only=true")
                };

                // Send request
                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();
                _logger.LogInformation($"Newscatcher API Response: {content}");
                var newsApiResponse = JsonSerializer.Deserialize<NewsApiResponse>(content, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (newsApiResponse?.Articles == null)
                {
                    return BadRequest("No articles received from API");
                }

                // process each article
                foreach (var apiArticle in newsApiResponse.Articles)
                {
                    try
                    {


                        // Skip articles with no summary to process
                        if (string.IsNullOrEmpty(apiArticle.Summary))
                        {
                            _logger.LogWarning($"Skipping article '{apiArticle.Title}' due to missing summary");
                            continue;
                        }
                        var article = new Article
                        {
                            Title = apiArticle.Title ?? "Untitled",
                            PublishedDate = string.IsNullOrEmpty(apiArticle.PublishedDate)
                    ? DateTime.Now  // Use current date if PublishedDate is null
                    : DateTime.Parse(apiArticle.PublishedDate),
                            Link = apiArticle.Link ?? "",
                            Excerpt = apiArticle.Excerpt ?? "",
                            Topic = apiArticle.Topic ?? "Uncategorized",
                            Authors = new List<Author>()
                        };

                        // Generate AI summary
                        // Generate AI summary from the API's summary
                        if (!string.IsNullOrEmpty(apiArticle.Summary))
                        {
                            article.Summary = await GenerateAISummary(apiArticle.Summary);
                        }

                        // Handle authors
                        if (apiArticle.Authors?.Any() == true)
                        {

                            foreach (var authorName in apiArticle.Authors)
                            {
                                if (string.IsNullOrWhiteSpace(authorName)) continue;
                                // Try to find if this author already exists
                                var existingAuthor = await _context.Authors
                                    .FirstOrDefaultAsync(a => a.Name == authorName);

                                if (existingAuthor != null)
                                {
                                    article.Authors.Add(existingAuthor);
                                }
                                else
                                {
                                    var newAuthor = new Author { Name = authorName };
                                    await _context.Authors.AddAsync(newAuthor);
                                    article.Authors.Add(newAuthor);
                                }
                            }
                        }

                        await _context.Articles.AddAsync(article);
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"Error processing article {apiArticle.Title}: {ex.Message}");
                        continue; // Skip this article and continue with the next
                    }
                }

                await _context.SaveChangesAsync();
                return Ok("Articles fetched and processed successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error processing articles: {ex.Message}");
            }
        }

        // Method to generate AI summary
        private async Task<string> GenerateAISummary(string articleContent)
        {
            try
            {
                // Validate input
                if (string.IsNullOrEmpty(articleContent))
                {
                    throw new ArgumentException("Article content cannot be empty");
                }

                var accountId = _configuration["Cloudflare:AccountId"];
                var apiToken = _configuration["Cloudflare:ApiToken"];
                var modelName = _configuration["Cloudflare:ModelName"];

                // Prepare the request
                var requestUrl = $"{BaseUrl}/{accountId}/ai/run/{modelName}";
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,
                    RequestUri = new Uri(requestUrl),
                    Headers =
            {
                { "Authorization", $"Bearer {apiToken}" }
            },
                    Content = new StringContent(
                        JsonSerializer.Serialize(new { input_text = articleContent }),
                        Encoding.UTF8,
                        "application/json"
                    )
                };

                // Send request and handle response
                using var response = await _httpClient.SendAsync(request);

                if (!response.IsSuccessStatusCode)
                {
                    var errorContent = await response.Content.ReadAsStringAsync();
                    _logger.LogError($"Workers AI API error: {errorContent}");
                    return "Failed to generate summary";
                }

                var responseContent = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"Raw response: {responseContent}");

                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var result = JsonSerializer.Deserialize<WorkersAiResponse>(responseContent, options);
                Console.WriteLine($"Deserialized - Success: {result?.Success}");
                Console.WriteLine($"Result object exists: {result?.Result != null}");
                if (result?.Result != null)
                {
                    Console.WriteLine($"Summary value: '{result.Result.Summary}'");
                }

                return result?.Result?.Summary ?? "No summary generated";
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error generating AI summary: {ex}");
                return "An error occurred while generating the summary";
            }
        }
    }
}
