namespace api.Dtos
{
    public class ArticleResponseDto
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Link { get; set; }
        public string? Excerpt { get; set; }
        public string? Summary { get; set; }
        public string? Topic { get; set; }
        public List<AuthorDto>? Authors { get; set; }
    }
}
