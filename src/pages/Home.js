import React from 'react';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import TopMovers from '../components/TopMovers';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopMovers />
       <Services />
        <HowItWorks />
      <WhoWeAre />
     
     
      
      <CTA />
    </div>
  );
};

export default Home;
