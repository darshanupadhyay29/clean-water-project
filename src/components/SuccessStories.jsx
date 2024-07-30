import React from 'react';
import Slider from 'react-slick';

// Import local images
import successImg1 from '../assets/images/success1.jpg';
import successImg2 from '../assets/images/success2.png';
import successImg3 from '../assets/images/success3.png';
import successImg4 from '../assets/images/success4.png';

// Sample success stories data with local image imports
const successStories = [
  {
    title: 'Clean Water Transforms Lives in Rural India',
    description: 'A new water project in rural India has brought clean drinking water to thousands of people, reducing disease and improving quality of life.',
    image: successImg1,
  },
  {
    title: 'Sanitation Improvements in Sub-Saharan Africa',
    description: 'Innovative sanitation solutions have significantly improved hygiene and health outcomes in several communities across Sub-Saharan Africa.',
    image: successImg2,
  },
  {
    title: 'Water Access in Remote Areas of South America',
    description: 'Efforts to provide clean water in remote areas of South America have led to healthier communities and improved quality of life.',
    image: successImg3,
  },
  {
    title: 'Improved Sanitation in Southeast Asia',
    description: 'Sanitation projects in Southeast Asia have successfully reduced waterborne diseases and improved living conditions.',
    image: successImg4,
  },
  // Add more stories as needed
];

const SuccessStories = () => {
  // Slider settings with automatic sliding and additional options
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between slides in milliseconds
    arrows: false, // Show navigation arrows
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Success Stories</h2>
        <div className="relative">
          <Slider {...settings}>
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <div className="relative w-full h-60">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-[100%] h-full object-contain rounded mb-4"
                  />
                </div>
                <h3 className="text-2xl text-center font-semibold mb-2 text-gray-800">{story.title}</h3>
                <p className="text-lg text-center text-gray-600">{story.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
