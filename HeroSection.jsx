import React from 'react';

export default function HeroSection(){
  return (
    <section className="hero-section container">
      <div className="hero-left fade-in-up">
        <h1>ChutNee — Taste the digital spice</h1>
        <p>Beautifully crafted UI components matched to the Figma design, optimized for mobile with smooth CSS-only animations.</p>
        <div className="hero-cta">
          <button className="btn primary button-hover">Get Started</button>
          <button className="btn ghost button-hover">View Demo</button>
        </div>
      </div>
      <div className="hero-right fade-in-up delay-1">
        <div className="device-mock">
          <div className="screen">
            <p>Mobile preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}
