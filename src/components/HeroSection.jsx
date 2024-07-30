import React from 'react';
import mainImg from '../assets/images/hero1.jpg'; // Import the image

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 object-cover h-full w-full brightness-50"
        src={mainImg} // Use the imported image
        alt="A community celebrating access to clean water"
      />
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue via-transparent to-transparent opacity-80"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-aqua-100 mb-6 leading-tight text-white">
          1 in 10 People Lack Clean Water. <br /> Together, Let's Change Lives.
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
          Access to clean water is essential for health and development. Join us in our mission to provide this basic human right to communities worldwide.
        </p>
        <div className="flex gap-4">
          <button className="bg-clear-aqua text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-clear-aqua/80 transition-colors duration-300">
            Donate Now
          </button>
          <button className="bg-transparent border-2 border-clear-aqua text-clear-aqua px-6 py-3 rounded-lg font-semibold hover:bg-clear-aqua hover:text-white transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
