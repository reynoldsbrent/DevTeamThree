using api.Controllers;
using api.Data;
using api.Dtos;
using api.Models;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace api.Tests.Controllers
{


    public class ArticlesControllerTests
    {
        [Fact]
        public async Task GetAllArticles_ReturnsOkResultWithArticles()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<ApplicationDBContext>()
                .UseInMemoryDatabase(databaseName: "TestArticlesDb")
                .Options;

            using var context = new ApplicationDBContext(options);

            var testArticle = new Article
            {
                ID = 1,
                Title = "Test Article 1",
                Link = "https://test.com/article1",
                Excerpt = "Test excerpt",
                Summary = "Test summary",
                Topic = "Test topic",
                PublishedDate = DateTime.Now,
                Authors = new List<Author>
                {
                    new Author { ID = 1, Name = "Author 1" }
                }
            };

            context.Articles.Add(testArticle);
            await context.SaveChangesAsync();

            var controller = new ArticlesController(
                context,
                A.Fake<IConfiguration>(),
                A.Fake<HttpClient>(),
                A.Fake<ILogger<ArticlesController>>()
            );

            // Act
            var result = await controller.GetAllArticles();

            // Assert
            result.Result.Should().BeOfType<OkObjectResult>();
            var okResult = (OkObjectResult)result.Result;
            okResult.Value.Should().NotBeNull();
        }
    }
}
