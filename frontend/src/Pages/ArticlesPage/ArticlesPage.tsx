import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Loader2, X } from 'lucide-react';

interface Article {
    id: string;
    title: string;
    publishedDate: string;
    summary: string;
    link: string;
  }
  
  const formatDate = (dateString: string) => {
    // Log the incoming date string
    console.log('Input date string:', dateString);
  
    try {
      // First attempt: direct parsing
      const date = new Date(dateString);
      console.log('Parsed date object:', date);
      console.log('Date.getTime():', date.getTime());
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        console.log('Invalid date detected, attempting alternative parsing');
        
        // Alternative parsing method
        const [datePart, timePart] = dateString.split(' ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hours, minutes, seconds] = timePart.split(':').map(Number);
        
        const correctedDate = new Date(year, month - 1, day, hours, minutes, seconds);
        console.log('Corrected date:', correctedDate);
        
        if (isNaN(correctedDate.getTime())) {
          console.log('Alternative parsing also failed');
          return 'Invalid date';
        }
        
        return correctedDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
  
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.log('Error in date formatting:', error);
      return 'Invalid date';
    }
  };

  const Modal = ({ article, onClose }: { article: Article; onClose: () => void }) => {
    console.log('Article URL in modal:', article.link);
  
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    
  
    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);
  
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={handleBackdropClick}
      >
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 pr-8">
                {article.title}
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">
                {formatDate(article.publishedDate)}
              </span>
            </div>
  
            <div className="text-gray-600 mb-6">
              {article.summary}
            </div>
  
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-block cursor-pointer underline hover:no-underline"
              onClick={() => console.log('Link clicked, URL:', article.link)}
            >
              Read full article
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  const ArticlesPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await fetch('https://localhost:7160/api/Articles/fetch-and-process', {
            method: 'POST',
          });
  
          const response = await fetch('https://localhost:7160/api/Articles/all');
          if (!response.ok) {
            throw new Error('Failed to fetch articles');
          }
          const data = await response.json();
          setArticles(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // Handle escape key press to close modal
    useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && selectedArticle) {
          setSelectedArticle(null);
        }
      };
  
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, [selectedArticle]);
  
    if (error) {
      return (
        <Layout>
          <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center">
            <div className="text-red-600">
              Error loading articles: {error}
            </div>
          </div>
        </Layout>
      );
    }
  
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
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="cursor-pointer block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                          {article.title}
                        </h2>
                        <div className="flex items-center text-gray-600 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {formatDate(article.publishedDate)}
                        </span>
                        </div>
                        <p className="text-gray-600 line-clamp-3">
                          {article.summary}
                        </p>
                        <div className="mt-4 text-blue-600 text-sm font-medium">
                          Read full summary 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
  
          {/* Modal */}
          {selectedArticle && (
            <Modal 
              article={selectedArticle} 
              onClose={() => setSelectedArticle(null)} 
            />
          )}
        </div>
      </Layout>
    );
  };
  
  export default ArticlesPage;