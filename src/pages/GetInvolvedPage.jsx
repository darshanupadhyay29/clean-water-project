import React from 'react';
import { FaHandsHelping, FaDollarSign, FaPeopleArrows } from 'react-icons/fa';

// Import images
import communityImg from '../assets/images/volunteer.jpg'; // Replace with actual path
import donateImg from '../assets/images/donate.jpg'; // Replace with actual path
import headerImg from '../assets/images/LearMore2.jpg'; // Replace with actual path

const GetInvolvedPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="relative text-center py-16">
        {/* Background image */}
        <img src={headerImg} alt="Header Background" className="absolute inset-0 w-full h-full object-cover opacity-60 shadow-lg" />
        
        {/* Overlay for text visibility */}
        <div className="relative z-10 bg-transparent bg-opacity-40 py-16 px-6 rounded-b-lg shadow-lg w-full h-full ">
          <h1 className="text-5xl font-bold mb-4 text-teal-700 drop-shadow-lg">Get Involved</h1>
          <p className="text-xl mb-4 text-light-cyan drop-shadow-lg text-gray-950">Join our efforts in making a difference. Here’s how you can contribute to clean water initiatives.</p>
        </div>
      </header>
      
      <main className="mt-12 space-y-12">
        {/* Section 1: Donate */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-transparent opacity-30"></div>
          <img src={donateImg} alt="Donate" className="w-full h-60 object-cover rounded-lg mb-6"/>
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaDollarSign className="text-4xl text-teal-500 mr-3" />
            Make a Donation
          </h2>
          <p className="text-lg mb-6">Your contribution can help us fund clean water projects, support communities, and improve water access. Every donation makes a difference.</p>
          <a href="#donate" className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md cursor-pointer hover:bg-teal-600 transition-colors ">
            Donate Now
          </a>
        </div>

        {/* Section 2: Volunteer */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-transparent opacity-30"></div>
          <img src={communityImg} alt="Volunteer" className="w-full h-[60vh] object-cover rounded-lg mb-6"/>
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHandsHelping className="text-4xl text-green-500 mr-3" />
            Volunteer with Us
          </h2>
          <p className="text-lg mb-6">Join our team of dedicated volunteers to help with community projects, educational programs, and advocacy efforts. Your time and skills are invaluable.</p>
          <a href="#volunteer" className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md cursor-pointer hover:bg-green-600 transition-colors ">
            Get Involved
          </a>
        </div>

        {/* Section 3: Spread the Word */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaPeopleArrows className="text-4xl text-blue-500 mr-3" />
            Spread the Word
          </h2>
          <p className="text-lg mb-6">Help us reach more people by sharing our mission and initiatives on social media, organizing events, and encouraging others to get involved.</p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Share our content on social media.</li>
            <li>Organize or participate in community events.</li>
            <li>Encourage friends and family to support clean water initiatives.</li>
          </ul>
          <a href="#spread-the-word" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors cursor-pointer">
            Learn More
          </a>
        </div>
      </main>
      
      <footer className="text-center py-6 bg-teal-500 text-white mt-12 rounded-t-lg shadow-md">
        <p>&copy; 2024 Clean Water Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GetInvolvedPage;
