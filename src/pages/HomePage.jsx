import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Quiz from '../components/Quiz';
import Map from '../components/Map';
import waterScienceImg from '../assets/images/water-science.jpg';
import SuccessStories from '../components/SuccessStories';


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection
        title="The Science Behind Clean Water"
        content="Clean water is essential for human health. It prevents diseases and promotes better hygiene. Understanding the science behind clean water can help us address water quality issues more effectively."
        image={waterScienceImg}
        statistics={[
          '2.2 billion people lack access to clean drinking water.',
          '80% of wastewater worldwide is released into the environment without treatment.',
          'Investing in clean water can reduce child mortality rates by 50%.',
        ]}
        actions={[
          'Donate to organizations working on clean water projects.',
          'Participate in local clean water initiatives and events.',
          'Advocate for better water management policies in your community.',
        ]}
      />
      {/* <InfoSection
        title="Global Water Crisis"
        content="Many regions around the world suffer from water scarcity and lack proper sanitation facilities. Addressing the global water crisis requires a coordinated effort to improve water infrastructure and access."
      /> */}

      <Map />
      {/* <Quiz /> */}
      <SuccessStories/>
    </div>
  );
};

export default HomePage;
