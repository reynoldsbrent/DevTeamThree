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
  id: "6",
  name: "Mandi",
  title: "University Senior Communications and Criminal Justice Major and Police Department Intern",
  overview: "Mandi, age 21, is a senior in University studying Communications and Criminal Justice, who is also interning with the local police department. She is from New Orleans, but has lived in Kentucky for the last  few years. Mandi regularly uses a computer and various kinds of productivity software for school and work. She also frequently uses social media, and is comfortable learning new technologies. Mandi is interested in using The Daily News Summary to better stay informed of the news.",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona6: React.FC = () => {
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

export default Persona6;