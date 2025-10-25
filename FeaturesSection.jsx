import React from 'react';

const features = [
  {title: 'Responsive', desc: 'Mobile-first layout and adaptable components.'},
  {title: 'Animated', desc: 'CSS-only animations with keyframes & transitions.'},
  {title: 'Performant', desc: 'Lightweight code and minimal runtime overhead.'},
];

export default function FeaturesSection(){
  return (
    <section id="features" className="features-section container fade-in-up delay-3">
      <h2>Key Features</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <article className="feature-card" key={idx}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
