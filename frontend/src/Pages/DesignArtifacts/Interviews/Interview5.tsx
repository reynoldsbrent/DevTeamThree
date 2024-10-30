import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface InterviewData {
    id: string;
    interviewer: string;
    date: string;
    content: string;
  }
  

  const interviewData: InterviewData = {
    id: "5",
    interviewer: "Jared Rosenberger",
    date: "10/28/2024",
    content: `Name: James Farese 

Age: 34 

Occupation: Student(CS & Math, Pre-MBA), UPS night manager, Dad 

  

Needs/Feature Requests:

Short summaries of major articles.

Ability to tailor to specific fields (sports, science, business, etc.).

As current as possible, maintaining relevance. 

Non-bias in stories. `
  };
  
  const Interview5: React.FC = () => {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 pt-8">
          <div className="max-w-4xl mx-auto px-4">
            {/* Interview Container */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Interview {interviewData.id}
                </h1>
                
                {/* Interview Metadata */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-600">Interviewer</h2>
                      <p className="text-lg text-gray-900">{interviewData.interviewer}</p>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-gray-600">Date</h2>
                      <p className="text-lg text-gray-900">{interviewData.date}</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Interview Content */}
              <div className="prose max-w-none">
                {/* Split paragraphs and map them to maintain proper spacing */}
                {interviewData.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-800 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };

export default Interview5;