import React from 'react';
import './OurImpact.scss';

const OurImpact = () => {
  const impactStats = [
    {
      number: "100+",
      label: "Global Clients"
    },
    {
      number: "50+",
      label: "Countries Served"
    },
    {
      number: "95%",
      label: "Client Satisfaction"
    },
    {
      number: "500+",
      label: "Projects Delivered"
    }
  ];

  return (
    <section className="our-impact">
      <div className="container">
        <h2>Our Impact</h2>
        <p className="impact-description">
          Transforming businesses globally through innovative solutions and sustainable practices
        </p>
        <div className="impact-grid">
          {impactStats.map((stat, index) => (
            <div className="impact-card" key={index}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;