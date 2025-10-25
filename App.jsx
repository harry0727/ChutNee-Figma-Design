import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="app dark-theme">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
