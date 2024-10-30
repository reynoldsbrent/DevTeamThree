import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "8",
  title: "Gerald Scenario 2",
  content: "Gerald’s wife has informed him of a fun new application that she has heard about from her best friend Patti. She said that this application is all the rage these days and shows off all the news that is happening around the city. The one complaint that Patti has with the application, however, is that she believes it is getting too involved with politics. Most of the news segments on the website are completely revolved around politics and things that should be avoided. This upsets Gerald as he believes that news sites should try and remain unbiased. Gerald decides to try and help them see the error in their ways, so he emails the creators of the website to try and ask if they can find more based on facts as opposed to beliefs. The creators responded quite quickly and were very understanding of Geralds concerns, and they agreed to try and focus on the more entertaining aspects of the city, such as fun events to do around town, and how the New Orleans Saints have done for the week. They even asked Gerald if he could help them to find fun information that he deemed useful for the website."
};

const Scenario8: React.FC = () => {
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

export default Scenario8;