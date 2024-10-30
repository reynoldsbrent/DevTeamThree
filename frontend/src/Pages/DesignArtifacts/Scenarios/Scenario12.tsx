import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface ScenarioData {
  id: string;
  title: string;
  content: string;
}

const scenarioData: ScenarioData = {
  id: "12",
  title: "Elizabeth Scenario 3",
  content: "One day after Elizabeth’s favorite class, the teacher asked if they could talk. Elizabeth was worried about this because usually when teachers ask to talk after class it is not a good thing. This was not one of these scenarios, however. The teacher had great news for her about a potential job she could take that involved helping grade school students with making friends and learning about the world. The teacher informed her that they are experimenting with a new application that would allow grade school students to connect with one another and learn new things about students and their schools. This fascinated Elizabeth as she was very shy in grade school, and this would have helped her to make new friends that she could talk to her whole life. Elizabeth asked her teacher what she could do to help them out, and the teacher told her that they need help to make sure that all the information and connections that get made through the app is kid friendly. This is very hard to do because most of the news going around the internet today is not kid appropriate. To achieve this goal Elizabeth decided to scour the internet and find a bunch of kid safe websites to see how they are able to maintain the kid friendliness of their information. What she found is that there is a way to filter information and ban unsafe things for work that may not be suitable for children. This was exciting for Elizabeth as it meant that she could make a website that is kid friendly and would allow children to connect with one another and learn news about the city."
};

const Scenario12: React.FC = () => {
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

export default Scenario12;