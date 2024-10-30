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
  id: "5",
  name: "Jim",
  title: "University Senior Computer Science Major and UPS Night Shift Supervisor",
  overview: "Jim, age 34, is a senior in University studying Computer Science and Mathematics, and a night shift supervisor at UPS. He is from Kentucky and is working on his bachelors degree after serving in the Navy. Due to his time in the Navy and studying Computer Science, Jim has a great deal of technical experience, and considers himself tech savvy. Between school and work Jim is very busy, and has to carefully budget his free time. Jim is interested in The Daily News Summary's ability to help him save time while staying informed.",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona5: React.FC = () => {
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

export default Persona5;