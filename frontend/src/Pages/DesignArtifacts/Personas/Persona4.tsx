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
  id: "4",
  name: "Elizabeth",
  title: "College Student at the University of North Carolina",
  overview: "Elizabeth, a 21-year-old College student at the university of North Carolina. She lives in an apartment near Campus with her boyfriend of 3 years. They met in one of their freshman year classes, and they knew it was love at first sight. Other than her boyfriend she does not have too many friends at UNC. She is somewhat on the shy side of things but would like to try and make new friends if she can. She is an educational major, and her ideal job is to be a teacher for younger students, because she loves kids and wants to help them to learn! She wishes there were some way she could go online and be able to find out new and exciting things going on around the city, and maybe even at her college. If she could find an app to tell her the news going on around the city and inform her of new and exciting things, then maybe she can go to some events around time and make new friends.",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona4: React.FC = () => {
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

export default Persona4;