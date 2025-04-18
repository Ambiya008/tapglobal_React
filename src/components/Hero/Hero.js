import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transforming Global Payments</h1>
          <p>Innovative payment solutions for businesses worldwide</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="experience-cards">
          <div className="card">
            <div className="card-content">
              <h3>Enterprise Strategy</h3>
              <p>Real-world experience</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Turn around management</h3>
              <p>Real-world experience</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Mergers and Acquisitions</h3>
              <p>Real-world experience</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;