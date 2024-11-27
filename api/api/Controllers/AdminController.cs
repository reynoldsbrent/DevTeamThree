using api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public AdminController(ApplicationDBContext context)
        {
            _context = context;
        }

        // POST: api/admin/trigger-fetch
        // Manually trigger article fetch (for testing/admin use)
        [HttpPost("trigger-fetch")]
        public async Task<ActionResult> TriggerArticleFetch()
        {
            // call the article fetching service
            using var client = new HttpClient();
            var response = await client.PostAsync("https://localhost:7160/api/Articles/fetch-and-process", null);
            return Ok(await response.Content.ReadAsStringAsync());
        }

        // DELETE: api/admin/clear-old-articles
        // Clear articles older than X days
        [HttpDelete("clear-old-articles")]
        public async Task<ActionResult> ClearOldArticles([FromQuery] int daysToKeep = 7)
        {
            var cutoffDate = DateTime.Now.AddDays(-daysToKeep);
            var oldArticles = await _context.Articles.Where(a => a.PublishedDate < cutoffDate).ToListAsync();

            _context.Articles.RemoveRange(oldArticles);
            await _context.SaveChangesAsync();

            return Ok($"Removed {oldArticles.Count} old articles");
        }
    }
}
