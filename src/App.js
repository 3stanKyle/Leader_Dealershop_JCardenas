import React from 'react';
import NavBar from './sections/NavBar';
import BannerCarousel from './sections/BannerCarousel';
import KeySolutions from './sections/KeySolutions';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerCarousel />
      <KeySolutions />
    </div>
  );
}

export default App;