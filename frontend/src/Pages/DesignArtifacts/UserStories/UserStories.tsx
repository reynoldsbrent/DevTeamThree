import React from 'react';
import Layout from '../../../Components/Layout/Layout';

interface UserStory {
  id: string;
  fullStory: string;
}

const userStoriesData: UserStory[] = [
    { id: "1", fullStory: "As a busy professional, I want to receive an early morning news summary email so that I can stay informed before my client meetings." },
    { id: "2", fullStory: "As a consultant, I want industry-specific news filtering so that I can quickly find relevant information for my client's sector." },
    { id: "3", fullStory: "As a business user, I want overnight market updates from Asia so that I can understand global market movements." },
    { id: "4", fullStory: "As a mobile user, I want audio summaries of articles so that I can consume content during my commute." },
    { id: "5", fullStory: "As a consultant, I want AI-generated key takeaways so that I can quickly grasp complex market dynamics." },
    { id: "6", fullStory: "As a business professional, I want to easily save articles so that I can reference them during presentations." },
    { id: "7", fullStory: "As a time-pressed user, I want concise article summaries so that I don't have to read full-length articles." },
    { id: "8", fullStory: "As a mobile user, I want access to saved articles so that I can review them." },
    { id: "9", fullStory: "As a business traveler, I want breaking news alerts so that I can stay informed while on the move." },
    { id: "10", fullStory: "As an analyst, I want immediate impact assessments of breaking news so that I can understand its business implications." },
    { id: "11", fullStory: "As a mobile user, I want a mobile-optimized reading experience so that I can comfortably read news at the airport." },
    { id: "12", fullStory: "As a business professional, I want market reaction summaries so that I can understand how news affects markets." },
    { id: "13", fullStory: "As a frequent traveler, I want access to news updates so that I can catch up during flights." },
    { id: "14", fullStory: "As a consultant, I want expert commentary summaries so that I can understand different perspectives on breaking news." },
    { id: "15", fullStory: "As a mobile user, I want easy-to-digest formats so that I can quickly scan news while traveling." },
    { id: "16", fullStory: "As a business analyst, I want to track specific news stories so that I can follow their development throughout the day." },
    { id: "17", fullStory: "As a technology professional, I want categorized news sections so that I can focus on my industry's news." },
    { id: "18", fullStory: "As a consultant, I want emerging trends highlighting so that I can identify industry patterns." },
    { id: "19", fullStory: "As a business user, I want to easily export key insights so that I can use them in presentations." },
    { id: "20", fullStory: "As a professional, I want a weekly digest feature so that I can catch up on major stories I missed." },
    { id: "21", fullStory: "As an analyst, I want AI-identified industry shifts so that I can stay ahead of market changes." },
    { id: "22", fullStory: "As a mobile user, I want a clean reading interface so that I can comfortably read during my coffee break." },
    { id: "23", fullStory: "As a business professional, I want to save important insights so that I can reference them later." },
    { id: "24", fullStory: "As a consultant, I want related articles grouping so that I can understand broader industry patterns." },
    { id: "25", fullStory: "As a parent, I want curated news relevant to families so that I can stay informed about important topics for my children." },
    { id: "26", fullStory: "As a mother, I want age-appropriate content filters so that I can share news with my teenagers." },
    { id: "27", fullStory: "As a parent, I want educational news summaries so that I can discuss college preparation with my children." },
    { id: "28", fullStory: "As a busy parent, I want quick news scanning features so that I can review news during short breaks." },
    { id: "29", fullStory: "As a mother, I want social media trend explanations so that I can understand what my teenagers are discussing." },
    { id: "30", fullStory: "As a parent, I want to save articles for later so that I can share them with my family at appropriate times." },
    { id: "31", fullStory: "As a busy mother, I want mobile-optimized reading so that I can comfortably read news in my parked car." },
    { id: "32", fullStory: "As a parent, I want political issue summaries so that I can explain complex topics to my children." },
    { id: "33", fullStory: "As a community member, I want easy article sharing features so that I can share relevant news with my book club." },
    { id: "34", fullStory: "As a concerned citizen, I want fact-checking tools so that I can verify claims during discussions." },
    { id: "35", fullStory: "As a parent, I want balanced news coverage so that I can understand different perspectives on education issues." },
    { id: "36", fullStory: "As a community member, I want to save article collections so that I can reference them during group discussions." },
    { id: "37", fullStory: "As a book club member, I want easy-to-understand summaries so that I can explain complex topics to others." },
    { id: "38", fullStory: "As a parent, I want local news integration so that I can stay informed about community issues." },
    { id: "39", fullStory: "As a discussion participant, I want quick article search so that I can find relevant news during conversations." },
    { id: "40", fullStory: "As a community member, I want neutral news summaries so that I can share unbiased information with others." },
    { id: "41", fullStory: "As a parent, I want age-appropriate news summaries so that I can discuss current events with my children." },
    { id: "42", fullStory: "As a mother, I want AI-maintained context in summaries so that important details aren't lost in simplification." },
    { id: "43", fullStory: "As a parent, I want weekly news digests so that I can prepare for family discussions." },
    { id: "44", fullStory: "As a family discussion leader, I want simplified explanations so that I can make complex news understandable for children." },
    { id: "45", fullStory: "As a mother, I want positive news filtering so that I can balance serious news with uplifting stories." },
    { id: "46", fullStory: "As a parent, I want discussion prompts so that I can engage my children in news conversations." },
    { id: "47", fullStory: "As a parent, I want to save articles for later so that I can build a discussion agenda." },
    { id: "48", fullStory: "As a parent, I want clear summary language so that I can explain news events at a child's level." },
    { id: "49", fullStory: "As a sports fan, I want to be able to look at sports news." },
    { id: "50", fullStory: "As an investor, I need to be able to see business news." },
    { id: "51", fullStory: "As a tech enthusiast, I want to be able to look at tech and scientific news." },
    { id: "52", fullStory: "As a voter, I need to be able to look at political news." },
    { id: "53", fullStory: "As a citizen, I need to be able to see news about the country." },
    { id: "54", fullStory: "As a resident, I need to see news about my state." },
    { id: "55", fullStory: "As a gossip, I want to see celebrity news." },
    { id: "56", fullStory: "As a reader, I want to be able to read what matters to and is important to me." },
    { id: "57", fullStory: "As a Republican, I want to see right-leaning news." },
    { id: "58", fullStory: "As a Democrat, I want to see left-leaning news." },
    { id: "59", fullStory: "As an Independent, I want to see left and right leaning news." },
    { id: "60", fullStory: "As a voter, I need to see non-partisan political news." },
    { id: "61", fullStory: "As a philosopher, I want to see all opinions in a debate." },
    { id: "62", fullStory: "As an advocate, I need to see both sides in a debate." },
    { id: "63", fullStory: "As a debater, I need to see the opposition's stance, to better argue against them." },
    { id: "64", fullStory: "As a global citizen, I need to see both sides of ongoing conflicts." },
    { id: "65", fullStory: "As an American, I need to know what's currently happening in the US." },
    { id: "66", fullStory: "As a resident, I want to know what's currently going on in my state." },
    { id: "67", fullStory: "As someone with no source of news, I'd like to keep up with current events." },
    { id: "68", fullStory: "As someone on social media, I need news that can keep up with rapid pace of social media." },
    { id: "69", fullStory: "As a voter, I need up to date, current information and news on the candidates." },
    { id: "70", fullStory: "As someone in a 'news desert' I need access to current news." },
    { id: "71", fullStory: "As a young adult, I want to be educated and knowledgeable on current events." },
    { id: "72", fullStory: "As a global citizen, I need to stay up to date with what happens in the world." },
    { id: "73", fullStory: "As a busy professional, I don't have time to bother with pay walls or long articles." },
    { id: "74", fullStory: "As someone living paycheck to paycheck, I don't have money to pay for news subscriptions." },
    { id: "75", fullStory: "As a busy student, I don't want to have to search for free news alternatives." },
    { id: "76", fullStory: "As a student, I need free news alternatives." },
    { id: "77", fullStory: "As a student, I need a reliable news source without a limit on access." },
    { id: "78", fullStory: "As a young adult, I don't want to pay for reliable news." },
    { id: "79", fullStory: "As a citizen, I shouldn't need to pay for reliable news." },
    { id: "80", fullStory: "As a global citizen, I shouldn't have to pay to be informed about what's going on in the world." },
    { id: "81", fullStory: "As a busy professional, I don't have time to read lengthy articles." },
    { id: "82", fullStory: "As a student, I don't want to have to read long, drawn out articles for news." },
    { id: "83", fullStory: "As a young adult, I want to get concise news on the go." },
    { id: "84", fullStory: "As a voter, I want concise summaries of political news." },
    { id: "85", fullStory: "As a student, I want to be able to read the news whenever I like, wherever I like." },
    { id: "86", fullStory: "As a busy professional, I want concise summaries of the news that I can read with my coffee." },
    { id: "87", fullStory: "As a resident, I want news about my city/state to be direct and to the point." },
    { id: "88", fullStory: "As a global citizen, I want to understand the world without pages and pages of background." },
    { id: "89", fullStory: "As a resident, I want to know what's going on in my town." },
    { id: "90", fullStory: "As a student, I want to know what's happening in my hometown." },
    { id: "91", fullStory: "As a young adult, I want to know what's happening in and around where I live." },
    { id: "92", fullStory: "As a resident, I want to be knowledgeable on current events in my district and state." },
    { id: "93", fullStory: "As a busy professional, I don't want to have to search for news about my town." },
    { id: "94", fullStory: "As a student, I want to see news about the town my school is in." },
    { id: "95", fullStory: "As a student, I want to see news about my local board of education." },
    { id: "96", fullStory: "As a voter, I need to see news about local politics." },
    { id: "97", fullStory: "As a user, I want to discover new local restaurants featured in the news app, so that I can explore and support local businesses." },
    { id: "98", fullStory: "As a restaurant owner, I want to be featured in a dedicated section of the news app, so that I can increase visibility and attract more customers." },
    { id: "99", fullStory: "As a user, I want to read articles highlighting unique aspects of local restaurants, so that I can learn more about the culinary scene in my city." },
    { id: "100", fullStory: "As a user, I want to see reviews and ratings of the featured restaurants, so that I can make informed dining decisions." },
    { id: "101", fullStory: "As a user, I want to share my favorite restaurant articles on social media, so that I can recommend them to my friends." },
  { id: "102", fullStory: "As a user, I want to receive notifications about new restaurant features in the app, so that I stay updated on local dining options." },
  { id: "103", fullStory: "As a user, I want to filter featured restaurants by cuisine type, so that I can easily find the food I'm in the mood for." },
  { id: "104", fullStory: "As a restaurant owner, I want to submit my restaurant for consideration to be featured in the app, so that I can reach a wider audience." },
  { id: "105", fullStory: "As a user, I want to see a map view of featured restaurants, so that I can easily locate them and plan my visits." },
  { id: "106", fullStory: "As a user, I want to read interviews with restaurant owners and chefs, so that I can connect more personally with the local dining culture." },
  { id: "107", fullStory: "As a user, I want to see a variety of news topics in the app, so that I can stay informed about my city without feeling overwhelmed by political content." },
  { id: "108", fullStory: "As a user, I want to easily access a section dedicated to local events and entertainment, so that I can find fun activities to do around town." },
  { id: "109", fullStory: "As a user, I want to provide feedback on the types of news I prefer, so that the app can cater to my interests and improve my experience." },
  { id: "110", fullStory: "As a user, I want the news app to feature updates on local sports teams, like the New Orleans Saints, so that I can keep up with my favorite teams." },
  { id: "111", fullStory: "As a user, I want to see articles that highlight community stories and local culture, so that I can connect more deeply with my city." },
  { id: "112", fullStory: "As a user, I want the app creators to communicate with us about changes made in response to user feedback, so that I feel involved in the app's development." },
  { id: "113", fullStory: "As a user, I want to suggest fun local activities or events to the app creators, so that I can help enhance the content and support my community." },
  { id: "114", fullStory: "As a user, I want to receive notifications about new and exciting events happening in the city, so that I never miss out on fun opportunities." },
  { id: "115", fullStory: "As a user, I want to access a free news website that aggregates daily events and activities in New Orleans, so that I can easily stay informed without a subscription." },
  { id: "116", fullStory: "As a user, I want to see a comprehensive list of events happening in the city from multiple local news sources, so that I don't have to visit several websites to gather information." },
  { id: "117", fullStory: "As a user, I want the website to feature categories (like sports, entertainment, and community events), so that I can quickly find the news that interests me the most." },
  { id: "118", fullStory: "As a user, I want to provide feedback on the news website, so that I can suggest improvements and help shape the content offered." },
  { id: "119", fullStory: "As a user, I want to receive notifications about important local events and news updates, so that I can be informed in real time." },
  { id: "120", fullStory: "As a user, I want to easily share news articles and events on social media, so that I can inform my friends and family about what's happening around the city." },
  { id: "121", fullStory: "As a user, I want to see a calendar view of upcoming events in New Orleans, so that I can plan my activities in advance." },
  { id: "122", fullStory: "As a user, I want the news site to highlight unique and interesting stories about local culture and community, so that I can learn more about the city I live in." },
  { id: "123", fullStory: "As a user, I want to have the option to search for specific events or news articles by date or keyword, so that I can find exactly what I'm looking for." },
  { id: "124", fullStory: "As a user, I want the site to be mobile-friendly, so that I can access the news and events on my phone while I'm on the go." },
  { id: "125", fullStory: "As a child, I want to see news articles about fun and exciting events in my community, so that I can learn about things to do and places to visit." },
  { id: "126", fullStory: "As a child, I want the app to feature upcoming movies and TV shows that are age-appropriate, so that I can stay informed about entertainment options that I'll enjoy." },
  { id: "127", fullStory: "As a child, I want to have access to interactive content, such as quizzes or polls about news topics, so that I can engage with the information in a fun way." },
  { id: "128", fullStory: "As a parent, I want to know that the news my child is consuming is positive and appropriate, so that I can feel comfortable letting them use the app." },
  { id: "129", fullStory: "As a child, I want to see articles that highlight fun activities, like festivals or community events, so that I can participate in exciting local happenings." },
  { id: "130", fullStory: "As a child, I want to provide feedback on what types of news stories I would like to see more of, so that the app can better cater to my interests." },
  { id: "131", fullStory: "As a child, I want to have a simple and colorful interface that is easy to navigate, so that I can find information quickly and enjoyably." },
  { id: "132", fullStory: "As a child, I want to watch short video segments or trailers about upcoming movies and shows, so that I can see what interests me visually." },
  { id: "133", fullStory: "As a child, I want to have a section dedicated to fun facts or trivia about the news topics, so that I can learn new and interesting things." },
  { id: "134", fullStory: "As a child, I want the app to allow me to share my favorite articles or videos with friends, so that we can talk about them together." },
  { id: "135", fullStory: "As a student, I want to see a list of free events happening on campus and in the surrounding area, so that I can participate without worrying about costs." },
  { id: "136", fullStory: "As a student, I want to receive notifications about upcoming free events, so that I don't miss out on activities that interest me." },
  { id: "137", fullStory: "As a student, I want the app to include a calendar feature that highlights all upcoming events, so that I can easily plan my schedule." },
  { id: "138", fullStory: "As a student, I want to have a dedicated section for student-run events, so that I can support my peers and get involved in campus life." },
  { id: "139", fullStory: "As a student, I want to provide feedback on the types of events and activities I would like to see featured in the app, so that it can better meet my interests." },
  { id: "140", fullStory: "As a student, I want to see profiles of different campus organizations and clubs, so that I can learn how to get involved and meet new friends." },
  { id: "141", fullStory: "As a student, I want to read articles or posts about student experiences and tips for enjoying campus life on a budget, so that I feel more connected and informed." },
  { id: "142", fullStory: "As a student, I want the app to include a resource section for financial assistance for events or activities, so that I know where to seek help if needed." },
  { id: "143", fullStory: "As a student, I want to easily share events with friends through social media or messaging apps, so that we can plan to attend together." },
  { id: "144", fullStory: "As a student, I want to see fun facts or highlights about the history and culture of the campus, so that I can feel more connected to my university." },
  { id: "145", fullStory: "As a middle school student, I want to connect with classmates through a safe and friendly app, so that I can make new friends and share interests." },
  { id: "146", fullStory: "As a parent, I want to ensure that the app provides kid-friendly content, so that I can feel confident allowing my child to use it." },
  { id: "147", fullStory: "As a teacher, I want to have access to resources that help me monitor and curate the content shared on the app, so that I can maintain a safe environment for my students." },
  { id: "148", fullStory: "As a middle school student, I want to see articles and videos that are fun and educational, so that I can learn about my city and the world around me." },
  { id: "149", fullStory: "As a middle school student, I want to be able to share my own stories and experiences in a safe way, so that I can express myself and connect with others." },
  { id: "150", fullStory: "As a parent, I want to receive notifications about new features and safety updates in the app, so that I can stay informed about my child's online activities." },
  { id: "151", fullStory: "As a middle school student, I want to participate in safe online discussions or forums about my favorite topics, so that I can engage with peers in a moderated environment." },
  { id: "152", fullStory: "As a teacher, I want to provide feedback on the app's content and features, so that I can help improve the learning experience for my students." },
  { id: "153", fullStory: "As a middle school student, I want to see tips and resources on how to make friends and interact positively with others, so that I can develop my social skills." },
  { id: "154", fullStory: "As a developer, I want to implement robust filtering mechanisms to block inappropriate content, so that the app remains a safe space for children to explore and connect." }
];

const UserStories: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* User Stories Container */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                User Stories
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                Product Requirements Based on User Needs
              </h2>
            </div>

            {/* User Stories Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stories</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-4">
                  {userStoriesData.map((story) => (
                    <li 
                      key={story.id}
                      className="text-gray-800 leading-relaxed flex items-start"
                    >
                      <span className="mr-3 mt-1.5 text-gray-400">•</span>
                      <span>{story.fullStory}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserStories;