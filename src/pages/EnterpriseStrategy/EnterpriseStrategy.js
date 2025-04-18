import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './EnterpriseStrategy.scss';

const EnterpriseStrategy = () => {
  return (
    <div className="enterprise-strategy-page">
      <Header />
      <div className="enterprise-banner">
        <div className="container">
          <h1>Enterprise Strategy</h1>
          <p>Transforming Business Through Strategic Innovation</p>
        </div>
      </div>
      {/* Your existing enterprise strategy content */}
      <Footer />
    </div>
  );
};

export default EnterpriseStrategy;