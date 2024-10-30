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
  id: "2",
  name: "Sarah",
  title: "Parent of Four Kids",
  overview: "Sarah is aged 45 and is a part time real estate agent and mother of four kids living in Chicago. Her children are aged 8, 10, 12, and 14 and she spends a lot of her time outside of work doing activities with her kids. She works flexible hours to work around her kids' activities and obligations such as school and sports. She currently primarily reads news on the tablet in the morning and listens to the news on the radio during school runs. She also follows several news outlets on Facebook. She is interested in using the Daily News Summary to get quick summaries of articles since she is always busy with the kids. She wants to stay informed on what is going on in the news without getting overwhelmed by it.",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona2: React.FC = () => {
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

export default Persona2;