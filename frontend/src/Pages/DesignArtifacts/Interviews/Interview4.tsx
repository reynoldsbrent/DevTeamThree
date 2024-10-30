import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface InterviewData {
    id: string;
    interviewer: string;
    date: string;
    content: string;
  }
  

  const interviewData: InterviewData = {
    id: "4",
    interviewer: "Matthew Parsley",
    date: "10/15/2024",
    content: `I asked my interviewer three questions: what she would like to see in a news app, any concerns she has for us in our journey of making a news app, and what she thinks we could do that would make us unique and different from other news apps. 
    For the first question she responded by saying she would like us to try and make sure we have a somewhat reliable weather service on the site. 
    She hates it when she goes to check the weather and it says one thing, so she prepares for that only for the weather to do the complete opposite so now she is unprepared.
    She did say she knows that is almost impossible as the weather is very unpredictable, but she would appreciate it if we could try.
     She told me that as for our journey with creating the news app, she believes that we need to make sure that we do not try and appease every person on Earth. 
     She said we need to try and stick to ideas that we like, and not try and cater to every comment that we receive, as this would be nearly impossible. 
     She said you cannot please everyone, what one person may like another person may dislike, so if we like the work, we are putting out that is all that matters. 
     We cannot please everyone, so we should not stress ourselves out by trying to accommodate to everyone’s demands. 
     For the final question, she said that she believes that we just need to have our own unique perspective on things that occur. 
     She is tired of reading the exact same thing on multiple other news sites, she wants a different perspective of something. 
     For example, she said that most news sites will talk about all the crime and horrible things that occur in the city but leave out all the great and beautiful things that occur. 
     She wants someone to comment on all the small, beautiful things that occur around the city, such as a grocery store having a big sale, or a new restaurant that is opening. 
     She believes that most other news sites are so negative and condescending and she wants to see a news site that promotes positivity. `
  };
  
  const Interview4: React.FC = () => {
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

export default Interview4;