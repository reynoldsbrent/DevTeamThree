import React from 'react'
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface Article {
    id: string;
    title: string;
    publishedDate: string;
    summary: string;
    url: string;
  }
  
  const sampleArticles: Article[] = [
    {
      id: '1',
      title: 'Global Economic Trends Show Promising Recovery',
      publishedDate: '2024-11-17',
      summary: 'Recent economic indicators suggest a strong recovery in global markets, with emerging economies leading the way. Analysts point to increased consumer spending and technological advancement as key drivers.',
      url: '/article/1'
    },
    {
      id: '2',
      title: 'Breakthrough in Renewable Energy Storage',
      publishedDate: '2024-11-17',
      summary: 'Scientists announce a major advancement in battery technology that could revolutionize renewable energy storage, making solar and wind power more viable for widespread adoption.',
      url: '/article/2'
    },
    {
      id: '3',
      title: 'AI Innovation Transforms Healthcare Delivery',
      publishedDate: '2024-11-16',
      summary: 'New artificial intelligence applications are changing how healthcare is delivered, with predictive analytics and automated diagnostics leading to better patient outcomes.',
      url: '/article/3'
    }
  ];
  
  const ArticlesPage = () => {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 font-sans">
          {/* Hero Section */}
          <section className="bg-blue-600 text-white py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Latest News</h1>
              <p className="text-xl">Stay informed with our curated news summaries</p>
            </div>
          </section>
  
          {/* Articles Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleArticles.map((article) => (
                  <Link 
                    to={article.url} 
                    key={article.id}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                        {article.title}
                      </h2>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {new Date(article.publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-600 line-clamp-3">
                        {article.summary}
                      </p>
                      <div className="mt-4 text-blue-600 text-sm font-medium">
                        Read more →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  };
  
  export default ArticlesPage;