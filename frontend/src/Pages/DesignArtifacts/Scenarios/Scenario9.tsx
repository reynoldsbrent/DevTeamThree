import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "9",
  title: "Gerald Scenario 3",
  content: "Gerald’s son came home super excited one day. He told his dad about how he has a school project he must do that involves creating a news site that portrays the daily news of things that will occur around the city of New Orleans. Gerald loved this idea as he has always looked for fun and exciting things to do around the city ever since he retired. His son asks him for his help on how to find the news around town, and Gerald came up with the idea of searching for a bunch of local news stations and picking and combining through them to combine them all onto one website. This way someone can gather all the news on the city of New Orleans for the day from one website instead of having to find a bunch of different items.  Gerald also recommended that unlike most news sites theirs will be completely free to use. Most news sites require some sort of payment for all access to their websites, which upsets Gerald because he does not believe that news should be behind a paywall. Why should we pay to know what is happening around the city? Thus, Gerald and his son agreed that the website will be completely free to the public, and they will even take feedback from the public on how to improve their website."
};

const Scenario9: React.FC = () => {
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

export default Scenario9;