import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SousShowcase from './components/SousShowcase';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SousShowcase />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        <StarryBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;