import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './sections/NavBar';
import BannerCarousel from './sections/BannerCarousel';
import AnimatedStatsCounter from './sections/AnimatedStatsCounter';
import KeySolutions from './sections/KeySolutions';
import PartnerBenefits from './sections/PartnerBenefits';
import VendorPage from './sections/VendorPage';
import './App.css';

function Home() {
  return (
    <>
      <BannerCarousel />
      <AnimatedStatsCounter />
      <PartnerBenefits />
      <KeySolutions />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<VendorPage />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;