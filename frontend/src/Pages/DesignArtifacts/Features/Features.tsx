import React from 'react';

interface Feature {
  id: number;
  text: string;
  isMVP: boolean;
}

const Features = () => {
  const features: Feature[] = [
    { id: 1, text: "As current as possible, maintaining relevance", isMVP: true },
    { id: 2, text: "Non-bias in stories", isMVP: true },
    { id: 3, text: "Be concise, all facts no rambling. Short and to the point", isMVP: true },
    { id: 4, text: "Be able to pick between local/national news", isMVP: true },
    { id: 5, text: "Non-partisan / tell both sides of a story", isMVP: true },
    { id: 6, text: "Short summaries of major articles", isMVP: true },
    { id: 7, text: "Ability to tailor to specific fields (sports, science, business, etc.)", isMVP: true },
    { id: 8, text: "Comment section", isMVP: false },
    { id: 9, text: "Ability to save articles", isMVP: false },
    { id: 10, text: "A weekly sports section for professional and local sports", isMVP: false },
    { id: 11, text: "A weekly restaurant blog highlighting smaller local businesses", isMVP: false },
    { id: 12, text: "Family-friendly news content", isMVP: false },
    { id: 13, text: "Promote positivity and discourage negativity", isMVP: false },
    { id: 14, text: "User feedback integration for site updates", isMVP: false },
    { id: 15, text: "Audio version of each article", isMVP: false },
    { id: 16, text: "AI news summary with category filtering", isMVP: false },
    { id: 17, text: "Ability to generate discussion prompts for articles", isMVP: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              News Website Features
            </h2>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Legend */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-bold">Bold features</span> represent the Minimum Viable Product (MVP) requirements
              </p>
            </div>
            
            {/* Features List */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li 
                  key={feature.id}
                  className={`flex items-center p-4 rounded-lg ${
                    feature.isMVP ? 'bg-blue-50' : 'bg-gray-50'
                  }`}
                >
                  <span className={`
                    flex items-center justify-center
                    w-8 h-8 rounded-full mr-4
                    ${feature.isMVP ? 'bg-blue-600' : 'bg-gray-400'}
                    text-white text-sm font-medium
                  `}>
                    {feature.id}
                  </span>
                  <span className={`${
                    feature.isMVP ? 'font-bold text-blue-900' : 'text-gray-700'
                  }`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;