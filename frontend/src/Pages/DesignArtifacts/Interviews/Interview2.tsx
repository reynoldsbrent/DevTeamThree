import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface InterviewData {
    id: string;
    interviewer: string;
    date: string;
    content: string;
  }
  

  const interviewData: InterviewData = {
    id: "2",
    interviewer: "Brent Reynolds",
    date: "10/17/2024",
    content: `Interviewer: How do you currently consume news? 

Interviewee: I read the Wall Street journal, and I scroll through social media. I also listen to NPR when driving to work.  

Interviewer: What challenges do you face keeping up with the news? 

Interviewee: Finding unbiased and reliable news sources is tough especially in social media. I like to get news from multiple perspectives, so I am aware of the different viewpoints.  Also, time is another challenge since there is so much news to read and so little time.  

Interviewer: Which news sources do you trust and follow? 

Interviewee: NPA, Associated Press, and the Wall Street Journal. 

Interviewer: How much time per day do you spend reading the news? 

Interviewee: I usually spend about 30 minutes in the evening when I get home from work.  

Interviewer: Would an AI summary of the news be valuable to you? 

Interviewee: I would find it beneficial if it could provide a good balance of the news from different sources. 

Interviewer: When and how would you like to receive the news summaries? 

Interviewee: A summary in the evening at around 7:00 pm would be good. A website would be preferable since that is how I usually read my news right now.   `
  };
  
  const Interview2: React.FC = () => {
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

export default Interview2;