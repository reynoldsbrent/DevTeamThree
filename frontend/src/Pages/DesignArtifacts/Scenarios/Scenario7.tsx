import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "7",
  title: "Gerald Scenario 1",
  content: "Geralds best friend Felix has asked him for some input on a news app he is trying to create. He wants Gerald to help and give him ideas of different things he would like to see in the application. Gerald starts to do some googling online of cool and unique things that would be neat to have in a news app. He found that a lot of people like the idea of having a spot where a new local restaurant is introduced and talked about. This seemed like a cool way for smaller restaurants to get some popularity, while also showing off unique things about the city. This was a great idea for Gerald, so he immediately went and talked to Felix about this, and Felix loved the idea. Gerald then began to google some local restaurants that may be some candidates for this page on the application and sent them to Feliz so he could begin working on this webpage."
};

const Scenario7: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Scenario Container */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {scenarioData.title}
              </h1>
            </div>

            {/* Content Section */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {scenarioData.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Scenario7;