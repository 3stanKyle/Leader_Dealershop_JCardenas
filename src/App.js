import React from 'react';
import NavBar from './sections/NavBar';
import BannerCarousel from './sections/BannerCarousel';
import AnimatedStatsCounter from './sections/AnimatedStatsCounter';
import KeySolutions from './sections/KeySolutions';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerCarousel />
      <AnimatedStatsCounter />
      <KeySolutions />
    </div>
  );
}

export default App;