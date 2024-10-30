import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface InterviewData {
    id: string;
    interviewer: string;
    date: string;
    content: string;
  }
  

  const interviewData: InterviewData = {
    id: "1",
    interviewer: "Brent Reynolds",
    date: "10/16/2024",
    content: `Interviewer: How do you currently consume news? 

Interviewee: I mainly use Twitter (X) and Apple News. I follow several major news outlets, but I do not spend much time reading the news or watching them. I read about 3 articles a day and skim about 10 articles daily.  

Interviewer: What challenges do you face keeping up with the news? 

Interviewee: Time is the biggest issue that I face. Since I work a full-time job and have other obligations outside of work, I don’t have much time to read and watch the news as I would like. Also, a lot of articles are filled with unnecessary information that isn’t that important to the topic. 

Interviewer: Which news sources do you trust and follow? 

Interviewee: Reuters, Bloomberg, The Wall Street Journal, and The Economist. 

Interviewer: How much time per day do you spend reading the news? 

Interviewee: I spend about 45 minutes in total daily. 

Interviewer: Would an AI summary of the news be valuable to you? 

Interviewee: Yes, that would be great. It would save me time from reading articles which would allow me to read more throughout the day. 

Interviewer: When and how would you like to receive the news summaries? 

Interviewee: I would prefer to receive them in the early morning before I go to work, so probably around 6:30 am would be ideal for me. I would also like to receive a summary at the end of the day for news that came out during the day. I would prefer to read the news either on a website or an email would also work.  `
  };
  
  const Interview1: React.FC = () => {
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

export default Interview1;