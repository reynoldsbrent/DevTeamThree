import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "11",
  title: "Elizabeth Scenario 2",
  content: "Elizabeth received an email one day from the principle at UNC. It read that they were doing an experimental application that allowed them to spread the news of what was happening around the campus to every student. This idea sounded wonderful to Elizabeth as she wanted to try and do more things sat campus to try and make some more friends. She asked her principle how she could help them with this application and the principle responded saying that she needs help to gather information on things that college students would like to see on a news app. This excited Elizabeth because it would allow her to get to know some of her fellow students and hopefully make some new friends! As she began to talk to students, they all had one common thing that they mentioned to her, and that was the fact that money was a situation for them, so it would be hard for them to be able to go and do things if it required them to pay. This was shocking to Elizabeth as she had never considered the fact that a lot of people. She relayed this information to her principle, and they decided it would be beneficial if they made a special place that show cased fun things to do around campus and the city that is free for all. The principal even said that they may use some of the schools funding to pay for students to participate in an event if they are not able to afford it. This sounded like a great idea to Elizabeth, and she looked forward to working on this application as time went on."
};

const Scenario11: React.FC = () => {
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

export default Scenario11;