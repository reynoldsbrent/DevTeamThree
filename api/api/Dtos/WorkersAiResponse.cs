namespace api.Dtos
{
    public class WorkersAiResponse
    {
        public bool Success { get; set; }
        public WorkersAiResult Result { get; set; }
        public string[] Errors { get; set; }
        public string[] Messages { get; set; }
    }
}
