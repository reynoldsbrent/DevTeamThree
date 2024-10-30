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
  id: "3",
  name: "Gerald",
  title: "Retired Police Officer",
  overview: "Gerald, a 60-year-old police officer who has just recently retired. He was a police officer for 35 years and had finally decided that he needed a break as it is a very tiring and wearing job. He has a wife of 23 years, and together they have 2 kids, one 17 and one 15. They live in New Orleans and are huge fans of the New Orleans Saints. Ever since Gerald retired, he has been trying to figure out fun things he can do around the city to pass the time. He has a hard time reading the newspaper anymore because his eyes are starting to get bad on him. He is hoping with all of the new-fangled technology around, that someday there is a way for him to find out new and exciting things around the city and can help him find out things to do since he has retired.",
  newsHabits: [
  ],
  painPoints: [
  ]
};

const Persona3: React.FC = () => {
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

export default Persona3;