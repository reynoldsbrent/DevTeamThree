import React from 'react'
import componentDiagram from './ComponentInteractionDiagram.png'
import layeredModelDiagram from './LayeredModel.png'
import blockDiagram from './BlockDiagram.png'
import dockerSystemDiagram from './DockerSystemDiagram.png'

const ArchitecturalDesign: React.FC = () => {
    const designPrinciples = [
      {
        principle: "Easy to use",
        explanation: "Users should be able to easily access and read the news articles."
      },
      {
        principle: "Clear interface",
        explanation: "Users should be able to clearly navigate the website and access the articles."
      },
      {
        principle: "Reliable news",
        explanation: "Users should be able to count on getting reliable news every day."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="mb-8 mt-9">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                System Architecture
              </h1>
            </div>
  
            {/* Narrative Section */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-800 mb-4 leading-relaxed">
                The Daily News Summary is a web application built with a .NET Web API backend, and React JS frontend, and a SQLite database. The frontend, backend, and database are independent of each other leading to well defined responsibilities for each component. The front end will be responsible for the user interface of the web application. The user will be able to view article summaries in addition to being able to click on the article link to view the full original article if they wish to do so. The front end will call the API endpoints to get the articles from the database.
              </p>
              <p className="text-gray-800 mb-4 leading-relaxed">
                The API is responsible for fetching and processing the articles from the NewsCatcher API. This process also includes generating the AI summaries of each article using the bart-large-cnn model provided by the Cloudflare Workers AI API. The database is responsible for storing the articles and information about the authors of each article. A single-tenant SQLite database was chosen because of its well-suited ability to store article text.
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed">
                The overall flow of the application is as follows. The user clicks on the "View Articles" button on the home page. Then the front end calls the Fetch and Process API endpoint in which the NewsCatcher API is called. This data is processed and the GenerateAISummary method is called to generate a summary of the article's text using the bart-large-cnn model accessed via the Cloudflare Workers AI API. Then this summary along with the other details of the article such as the link to the original article and published date are stored in the database. After the Fetch and Process endpoint has been called to fetch the articles of the day, the Get All Articles endpoint is called by the front end. This returns a list of all the articles stored in the database ordered in descending order by published date so that the latest articles are at the top of the page.
              </p>
            </div>
  
            {/* Layered Model */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layered Model</h2>
              <div className="bg-white border rounded-lg shadow-sm">
                <div className="p-6">
                  <img 
                    src={layeredModelDiagram}
                    alt="Layered Model Diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
  
            {/* Design Principles */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Principles</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-semibold text-gray-600 pb-4">Principle</th>
                      <th className="text-left text-sm font-semibold text-gray-600 pb-4">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designPrinciples.map((principle, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-4 pr-4 text-gray-900 align-top">{principle.principle}</td>
                        <td className="py-4 text-gray-800">{principle.explanation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  
            {/* Block Diagram */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Block Diagram</h2>
              <div className="bg-white border rounded-lg shadow-sm">
                <div className="p-6">
                  <img 
                    src={blockDiagram}
                    alt="Block Diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
  
            {/* Docker System Diagram */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Docker System Diagram</h2>
              <div className="bg-white border rounded-lg shadow-sm">
                <div className="p-6">
                  <img 
                    src={dockerSystemDiagram}
                    alt="Docker System Diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
  
            {/* Component Interaction Diagram */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Component Interaction Diagram</h2>
              <div className="bg-white border rounded-lg shadow-sm">
                <div className="p-6">
                <img 
                src={componentDiagram}
                alt="Component Interaction Diagram"
                className="w-full h-auto rounded-lg"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ArchitecturalDesign