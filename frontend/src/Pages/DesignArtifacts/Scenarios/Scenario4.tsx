import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "4",
  title: "Sarah Scenario 1",
  content: "After dropping her youngest at elementary school, Sarah parks for a few minutes to review her Daily News Summary. The website has curated a mix of national headlines and topics relevant to parents (education and health). She appreciates how the web app displays content that might be good to discuss with her teenagers, including a summary of a political issue that's trending on social media. She saves a few articles about college preparation to discuss with her oldest child later."
};

const Scenario4: React.FC = () => {
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

export default Scenario4;