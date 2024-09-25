import React from 'react'
import { Camera } from 'lucide-react';

interface TeamMember {
    name: string;
    photo: string;
    bio: string;
  }
  
  const teamMembers: TeamMember[] = [
    { 
      name: "Brent Reynolds", 
      photo: "/images/team/breynolds.jpg",
      bio: "Senior at Bellarmine University studying Computer Science. Passionate about utilizing technology to solve today's complex problems."
    },
    { 
      name: "Jared Rosenberger", 
      photo: "/images/team/jrosenberger.jpg",
      bio: "Senior at Bellarmine University majoring in Computer Science."
    },
    { 
      name: "Matthew Parsley", 
      photo: "/images/team/mparsley.jpg",
      bio: "Senior at Bellarmine University majoring in Computer Science."
    },
  ];

const Hero: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">The Daily News Summary</h1>
          <p className="text-2xl mb-8">Stay Informed, Save Time</p>
          <p className="text-xl mb-8">Your daily digest of the world's most important stories, curated and summarized for busy professionals.</p>
          <a href="#features" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose The Daily News Summary?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Time-Saving Summaries", "Personalized Content", "AI Summary"].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p>{getFeatureDescription(feature)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl mb-8">To empower busy professionals with concise, reliable, and personalized news summaries, fostering a well-informed global community.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-40 rounded-small mx-auto mb-4 overflow-hidden">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <Camera size={48} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">See The Daily News Summary in Action</h2>
          <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/ProductPitch.png" alt="Product Pitch Video" className="w-full h-full object-cover rounded" />
            </div>
            <a href="https://video.bellarmine.edu/media/CS400+DevTeamThree+Product+Pitch/1_lfa2jc46" className="mt-4 text-gray-600">Click to watch our product pitch</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} The Daily News Summary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const getFeatureDescription = (feature: string): string => {
  switch (feature) {
    case "Time-Saving Summaries":
      return "Get the essence of today's news in just minutes, allowing you to stay informed without sacrificing your busy schedule.";
    case "Personalized Content":
      return "Receive news relevant to your interests and industry, ensuring you never miss out on what matters most to you.";
    case "AI Summary":
      return "The Daily News Summary utilizes AI to give you the best summaries of today's news.";
    default:
      return "";
  }
};

export default Hero;