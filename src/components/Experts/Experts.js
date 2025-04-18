import React from 'react';
import './Experts.scss';

const Experts = () => {
  const experts = [
    {
      name: "SANDEEP SINGHAL",
      designation: "TAP Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/images/experts/sandeep.jpg",
      linkedin: "https://linkedin.com/in/sandeep-singhal"
    },
    {
      name: "Scott Wilkins",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/images/experts/scott.jpg",
      linkedin: "https://linkedin.com/in/scott-wilkins"
    },
    {
      name: "Roger Patry",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/images/experts/roger.jpg",
      linkedin: "https://linkedin.com/in/roger-patry"
    },
    {
      name: "Pankaj Gupta",
      designation: "CTO",
      description: "Technology Leadership & Innovation",
      image: "/images/experts/pankaj.jpg",
      linkedin: "https://linkedin.com/in/pankaj-gupta"
    },
    {
      name: "Jay Sanghvi",
      designation: "Strategic Planning Lead",
      description: "Six Sigma Black Belt | Strategic Planner | Supply Chain Expert",
      image: "/images/experts/jay.jpg",
      linkedin: "https://linkedin.com/in/jay-sanghvi"
    }
  ];

  return (
    <section className="experts">
      <div className="container">
        <div className="experts-header">
          <h2>Leadership Team</h2>
          <p>Driving Innovation and Excellence</p>
        </div>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <div className="expert-image">
                <img src={expert.image} alt={expert.name} />
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <h4>{expert.designation}</h4>
                <p>{expert.description}</p>
                <a href={expert.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;