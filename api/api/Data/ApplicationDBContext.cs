using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Author> Authors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>()
               .HasIndex(a => a.PublishedDate);

            modelBuilder.Entity<Article>()
                .HasIndex(a => a.Link)
                .IsUnique();

            // Configure many-to-many relationship
            modelBuilder.Entity<Article>()
                .HasMany(a => a.Authors)
                .WithMany(a => a.Articles)
                .UsingEntity(
                    "ArticleAuthors",
                    l => l.HasOne(typeof(Author)).WithMany().HasForeignKey("AuthorId"),
                    r => r.HasOne(typeof(Article)).WithMany().HasForeignKey("ArticleId"),
                    j => j.HasKey("ArticleId", "AuthorId")
                );
        }

    }
     
}
