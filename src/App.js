import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './sections/NavBar';
import BannerCarousel from './sections/BannerCarousel';
import AnimatedStatsCounter from './sections/AnimatedStatsCounter';
import KeySolutions from './sections/KeySolutions';
import PartnerBenefits from './sections/PartnerBenefits';
import VendorPage from './sections/VendorPage';
import TrustedLeaderGallery from './sections/TrustedLeaderGallery';
import './App.css';

function Home() {
  return (
    <>
      <BannerCarousel />
      <AnimatedStatsCounter />
      <PartnerBenefits />
      <KeySolutions />
      <TrustedLeaderGallery />
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
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/vendors" element={<VendorPage />} />
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;