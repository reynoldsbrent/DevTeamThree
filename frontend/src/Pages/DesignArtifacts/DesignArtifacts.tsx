import React from 'react';
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';

interface NavigationItem {
  id: string;
  title: string;
  path: string;
  isExternal?: boolean;  
  url?: string;          
}

const interviews: NavigationItem[] = [
  { id: '1', title: 'Interview 1', path: '/interview1' },
  { id: '2', title: 'Interview 2', path: '/interview2' },
  { id: '3', title: 'Interview 3', path: '/interview3' },
  { id: '4', title: 'Interview 4', path: '/interview4' },
  { id: '5', title: 'Interview 5', path: '/interview5' },
  { id: '6', title: 'Interview 6', path: '/interview6' },
];

const personas: NavigationItem[] = [
  { id: '1', title: 'Persona 1', path: '/persona1' },
  { id: '2', title: 'Persona 2', path: '/persona2' },
  { id: '3', title: 'Persona 3', path: '/persona3' },
  { id: '4', title: 'Persona 4', path: '/persona4' },
  { id: '5', title: 'Persona 5', path: '/persona5' },
  { id: '6', title: 'Persona 6', path: '/persona6' },
];

const scenarios: NavigationItem[] = [
  { id: '1', title: 'Scenario 1', path: '/scenario1' },
  { id: '2', title: 'Scenario 2', path: '/scenario2' },
  { id: '3', title: 'Scenario 3', path: '/scenario3' },
  { id: '4', title: 'Scenario 4', path: '/scenario4' },
  { id: '5', title: 'Scenario 5', path: '/scenario5' },
  { id: '6', title: 'Scenario 6', path: '/scenario6' },
  { id: '7', title: 'Scenario 7', path: '/scenario7' },
  { id: '8', title: 'Scenario 8', path: '/scenario8' },
  { id: '9', title: 'Scenario 9', path: '/scenario9' },
  { id: '10', title: 'Scenario 10', path: '/scenario10' },
  { id: '11', title: 'Scenario 11', path: '/scenario11' },
  { id: '12', title: 'Scenario 12', path: '/scenario12' },
  { id: '13', title: 'Scenario 13', path: '/scenario13' },
  { id: '14', title: 'Scenario 14', path: '/scenario14' },
  { id: '15', title: 'Scenario 15', path: '/scenario15' },
  { id: '16', title: 'Scenario 16', path: '/scenario16' },
  { id: '17', title: 'Scenario 17', path: '/scenario17' },
  { id: '18', title: 'Scenario 18', path: '/scenario18' },
];

const additionalDocs: NavigationItem[] = [
  { id: 'stories', title: 'User Stories', path: '/userstories' },
  { id: 'features', title: 'Features List', path: '/featureslist' },
  { 
    id: 'video', 
    title: 'Video Overview', 
    path: '#',
    isExternal: true,
    url: 'https://video.bellarmine.edu/media/1_lo88dpb1'  
  },
  { id: 'architecture', title: 'Architectural Design', path: '/architecture' },
  { 
    id: 'finalvideo', 
    title: 'Final Video Overview', 
    path: '#',
    isExternal: true,
    url: 'https://video.bellarmine.edu/media/CS400_DevTeamThree_FinalVideoOverview/1_eqebm4rv'  
  }
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
            {item.isExternal ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded hover:bg-blue-50 text-blue-600 transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <Link
                to={item.path}
                className="block p-2 rounded hover:bg-blue-50 text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            )}
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