import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "16",
  title: "Mandi Scenario 1",
  content: "Mandi wants to stay up to date on current events, but many sources like the New York Times require subscription and only let people read half of an article. With The Daily News Summary, Mandi does not have that issue, and can read however much she wants when she has the time."
};

const Scenario16: React.FC = () => {
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

export default Scenario16;