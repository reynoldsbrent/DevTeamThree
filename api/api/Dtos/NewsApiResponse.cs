namespace api.Dtos
{
    public class NewsApiResponse
    {
        public List<NewsApiArticle> Articles { get; set; }
        public int TotalArticles { get; set; }
    }
}
