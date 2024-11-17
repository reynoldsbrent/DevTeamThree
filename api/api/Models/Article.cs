using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Article
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public DateTime PublishedDate { get; set; }

        [Required]
        public string Link { get; set; }

        public string? Excerpt { get; set; }
 
        public string? Summary { get; set; }

        public string? Topic { get; set; }

        public virtual ICollection<Author>? Authors { get; set; } = new List<Author>();
    }
}
