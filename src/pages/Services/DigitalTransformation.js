import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Services.scss';

const DigitalTransformation = () => {
  const heroStyle = {
    background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
  };

  return (
    <>
      <Header />
      <div className="service-page">
        <div className="hero-section" style={heroStyle}>
          <div className="container">
            <h1>Digital Transformation</h1>
            <p>Empowering businesses through innovative digital solutions</p>
          </div>
        </div>

        <div className="service-content">
          <div className="container">
            <div className="section-grid">
              <div className="content">
                <h2>Transform Your Business Digitally</h2>
                <p>We help organizations leverage cutting-edge technologies to streamline operations, enhance customer experience, and drive growth in the digital age.</p>
                <ul className="benefits">
                  <li>Digital Strategy Development</li>
                  <li>Process Automation</li>
                  <li>Cloud Integration</li>
                  <li>Data Analytics Solutions</li>
                </ul>
              </div>
              <div className="image">
                <img src="/images/services/digital-transformation.jpg" alt="Digital Transformation" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DigitalTransformation;