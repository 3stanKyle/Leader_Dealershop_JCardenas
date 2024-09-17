import React from 'react';
import NavBar from './sections/NavBar';
import BannerCarousel from './sections/BannerCarousel';
import AnimatedStatsCounter from './sections/AnimatedStatsCounter';
import KeySolutions from './sections/KeySolutions';
import PartnerBenefits from './sections/PartnerBenefits';
// import TestimonialCarousel from './sections/TestimonialCarousel'; //
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerCarousel />
      <AnimatedStatsCounter />
      <PartnerBenefits />
      <KeySolutions />
    </div>
  );
}

export default App;