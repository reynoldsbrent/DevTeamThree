import React from 'react';
import Layout from '../../../Components/Layout/Layout';


interface PersonaData {
  id: string;
  name: string;
  title: string;
  overview: string;
  newsHabits: string[];
  painPoints: string[];
}

const personaData: PersonaData = {
  id: "1",
  name: "Michael",
  title: "Businessman in Nashville",
  overview: "Michael is 32 years old and is a business consultant living in Nashville, Tennessee. He was born in Tennessee and completed his undergraduate and MBA at Vanderbilt University. He now works for a large consulting firm. He lives alone in his apartment and usually works about 50-60 hours per week. He often has to travel to customer sites across the country. He has a lot of meetings with clients all day and his evenings are usually busy with networking events. Currently, he is subscribed to the Wall Street Journal and Bloomberg and checks his phone regularly for news updates. He relies heavily on X for breaking news. He is interested in using the Daily News Summary to get quick summaries of breaking news articles of the day since he doesn’t have a lot of time to read full articles. ",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona1: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Persona Container */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {personaData.name}
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                {personaData.title}
              </h2>
            </div>

            {/* Overview Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed">
                  {personaData.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Persona1;