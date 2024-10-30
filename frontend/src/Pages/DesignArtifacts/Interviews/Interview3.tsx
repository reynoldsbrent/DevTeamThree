import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface InterviewData {
    id: string;
    interviewer: string;
    date: string;
    content: string;
  }
  

  const interviewData: InterviewData = {
    id: "3",
    interviewer: "Matthew Parsley",
    date: "10/10/2024",
    content: `I asked my interviewer three questions: what he would like to see in a news app, any concerns he has for us in our journey of making a news app, and what he thinks we could do that would make us unique and different from other news apps. 
    The first question he pondered on for a minute before finally responding with he would like to see a sports section, not only for professional sports, but also for local sports. 
    He believes that it would be neat to brag about how the common grade school and high school sports players are doing, as well as incorporating professional sports as well. 
    He said that we should pick one local school every week that we denote as having the sports win of the week, and talk about how great of a game it was to watch and participate in. 
    He said we need more news applications that focus on the local aspects and smaller schools as opposed to being focused solely on the big-name schools. 
    For the second question, his response was much quicker, he said that we need to try and stay away from hard topics to discuss on a news website. 
    If we want people to come and check our news site, then we need to focus more on the lighthearted and fun side of what’s going on in the community and stay away from all of the violence and harsh aspects that could be going on. 
    Most people would appreciate seeing a news site brag about the community and how great things are going, as opposed to down talking and ridiculing what goes on around the city. 
    His response to question 3 is very similar to what he said to question 1, he wants us to create a news application focused on all of the smaller businesses around the city and help to promote and raise awareness to lesser-known companies. 
    For example, he mentioned doing a weekly food blog, where we pick one restaurant per week that may be a smaller lesser-known location and try it out and do a food review on it. This will help to promote smaller businesses and be a great way to get people engaged with the community.  `
  };
  
  const Interview3: React.FC = () => {
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

export default Interview3;