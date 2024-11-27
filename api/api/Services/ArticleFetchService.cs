
namespace api.Services
{
    public class ArticleFetchService : BackgroundService
    {
        private readonly ILogger<ArticleFetchService> _logger;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public ArticleFetchService(ILogger<ArticleFetchService> logger, IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    // Get the configured time to run (ex: 1 AM UTC)
                    var runTime = _configuration.GetValue<string>("ArticleFetch:RunTime") ?? "01:00:00";
                    var targetTime = TimeSpan.Parse(runTime);
                    var now = DateTime.UtcNow;
                    var nextRun = now.Date.Add(targetTime);

                    if (now > nextRun)
                    {
                        nextRun = nextRun.AddDays(1);
                    }

                    var delay = nextRun - now;
                    await Task.Delay(delay, stoppingToken);

                    // Fetch articles
                    using var client = _httpClientFactory.CreateClient();
                    await client.PostAsync("api/articles/fetch-and-process", null, stoppingToken);

                    _logger.LogInformation("Articles fetched successfully at {time}", DateTimeOffset.Now);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error occured while fetching articles");
                }
            }
        }
    }
}
