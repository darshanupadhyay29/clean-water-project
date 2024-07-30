import React from 'react';
import { FaWater, FaLeaf, FaRecycle, FaHandsHelping } from 'react-icons/fa';

// Import the background image
import backgroundImage from '../assets/images/LearMore1.jpg'; // Update the path to your image

const LearnMorePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header 
        className="text-center py-12 bg-cover bg-center text-white rounded-b-lg shadow-md"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-teal-900 bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Understand Water and Sanitation</h1>
          <p className="text-xl mb-4">Explore practical tips and strategies for conserving water and promoting sustainability. Discover how small changes can make a big impact on the environment and your community.</p>
        </div>
      </header>
      
      <main className="mt-12 space-y-12">
        {/* New Section 1: Conservation Tips */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaWater className="text-4xl text-teal-500 mr-3" />
            Water Conservation Tips
          </h2>
          <p className="text-lg mb-6">Simple actions can make a big difference. Here are some easy ways to conserve water in your daily life:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li className="flex items-start space-x-3">
              <FaLeaf className="text-teal-500" />
              <span>Fix leaks promptly to prevent water waste. A small leak can waste hundreds of gallons of water every day.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaRecycle className="text-teal-500" />
              <span>Use water-efficient appliances and fixtures. Consider low-flow showerheads and faucets, and dual-flush toilets.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandsHelping className="text-teal-500" />
              <span>Collect rainwater for gardening and other uses. Rain barrels can help you conserve water and reduce your water bill.</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaWater className="text-teal-500" />
              <span>Water your garden early in the morning or late in the evening to minimize evaporation. Adjust your watering schedule based on the weather.</span>
            </li>
          </ul>
        </div>

        {/* New Section 2: The Impact of Conservation */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHandsHelping className="text-4xl text-teal-500 mr-3" />
            The Impact of Conservation
          </h2>
          <p className="text-lg mb-6">Effective water conservation helps ensure a sustainable supply of clean water for future generations. It also reduces the energy needed for water treatment and transportation, benefiting both the environment and your wallet.</p>
          <p className="text-lg mb-6">By conserving water, we reduce pollution in our rivers, lakes, and oceans, and help maintain healthy ecosystems. This also aids in reducing the carbon footprint associated with water management processes.</p>
          <p className="text-lg">Moreover, water conservation practices can lead to cost savings on utility bills and reduce the need for costly infrastructure upgrades and expansions.</p>
        </div>

        {/* New Section 3: Get Involved */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FaHandsHelping className="text-4xl text-teal-500 mr-3" />
            Get Involved
          </h2>
          <p className="text-lg mb-6">Join local water conservation initiatives and advocate for sustainable practices in your community. Together, we can make a significant impact!</p>
          <p className="text-lg mb-6">Consider participating in local clean-up events, supporting policies that promote water conservation, and spreading awareness about the importance of water sustainability.</p>
          <p className="text-lg mb-6">Volunteer with organizations that focus on water-related issues and contribute to projects that aim to improve water quality and access in underserved areas.</p>
          <a href="#get-involved" className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors">
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

export default LearnMorePage;
