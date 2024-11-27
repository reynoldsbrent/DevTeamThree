using api.JsonConverters;
using System.Text.Json.Serialization;

namespace api.Dtos
{
    public class NewsApiArticle
    {
        public string Title { get; set; }
        public string PublishedDate { get; set; }
        public string Link { get; set; }
        public string Excerpt { get; set; }
        public string Summary { get; set; }
        public string Topic { get; set; }
        [JsonConverter(typeof(AuthorsJsonConverter))]
        public List<string> Authors { get; set; }
    }
}
