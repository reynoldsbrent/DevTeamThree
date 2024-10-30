import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "10",
  title: "Elizabeth Scenario 1",
  content: "Elizabeth came home from school one day, and her boyfriend had exciting news. His company has started working on a news application for children. This was very exciting news for Elizabeth as she can use this for her capstone project since she is entering her senior year. Elizabeth asked her boyfriend for some details on what the news application wanted, and he said their goal was to provide younger kids with the capabilities of learning about fun and exciting things going on around them, without having to worry about the harsh realities of the world like most other news apps. This would include things like what new movies are coming out, any new and exciting restaurants opening, and any new tv show episodes that may be on air that day. This all sounded very exciting to Elizabeth, as she knew that the news was much too harsh for kids nowadays, and wanted to do anything she could to help develop this app. They put Elizabeth in charge of getting to know what kids would like to see on a news app, and then helping her boyfriend’s company to implement this into their application."
};

const Scenario10: React.FC = () => {
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

export default Scenario10;