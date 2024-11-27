using System.Text.Json.Serialization;

namespace api.Dtos
{
    public class WorkersAiResult
    {
        [JsonPropertyName("summary")]
        public string Summary { get; set; }
    }
}
