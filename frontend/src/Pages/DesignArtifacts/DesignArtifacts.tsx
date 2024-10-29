import React from 'react';
import Layout from '../../Components/Layout/Layout';

interface NavigationItem {
  id: string;
  title: string;
  path: string;
}

const interviews: NavigationItem[] = [
  { id: '1', title: 'Interview 1', path: '/interviews/interview1' },
  { id: '2', title: 'Interview 2', path: '/interviews/interview2' },
  { id: '3', title: 'Interview 3', path: '/interviews/interview3' },
  { id: '4', title: 'Interview 4', path: '/interviews/interview4' },
  { id: '5', title: 'Interview 5', path: '/interviews/interview5' },
  { id: '6', title: 'Interview 6', path: '/interviews/interview6' },
];

const personas: NavigationItem[] = [
  { id: '1', title: 'Persona 1', path: '/personas/persona1' },
];

const scenarios: NavigationItem[] = [
  { id: '1', title: 'Scenario 1', path: '/scenarios/scenario1' },
];

const additionalDocs: NavigationItem[] = [
  { id: 'stories', title: 'User Stories', path: '/user-stories' },
  { id: 'features', title: 'Features List', path: '/features-list' },
];

const NavigationSection: React.FC<{
  title: string;
  items: NavigationItem[];
}> = ({ title, items }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="p-2">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              className="block p-2 rounded hover:bg-blue-50 text-blue-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const DesignArtifacts: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4">

          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
              Design Artifacts
            </h1>

            <div className="space-y-6">
              <NavigationSection title="Interviews" items={interviews} />
              <NavigationSection title="Personas" items={personas} />
              <NavigationSection title="Scenarios" items={scenarios} />
              <NavigationSection title="Additional Documentation" items={additionalDocs} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DesignArtifacts;