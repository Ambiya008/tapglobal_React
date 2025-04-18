import React from 'react';
import Header from '../../components/Header/Header';
import OurImpact from '../../components/OurImpact/OurImpact';
import Experts from '../../components/Experts/Experts';
import Footer from '../../components/Footer/Footer';
import './Company.scss';

const Company = () => {
  return (
    <div className="company-page">
      <Header />
      <div className="company-banner">
        <div className="container">
          <h1>Our Company</h1>
          <p>Building Tomorrow's Solutions Today</p>
        </div>
      </div>
      <OurImpact />
      <Experts />
      <Footer />
    </div>
  );
};

export default Company;