using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Author
    {
        [Required]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual ICollection<Article> Articles { get; set; } = new List<Article>();
    }
}
