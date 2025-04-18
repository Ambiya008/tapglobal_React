import React from 'react';
import ScrollingBanner from '../components/ScrollingBanner/ScrollingBanner';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <ScrollingBanner />
      {/* Other home page content */}
    </div>
  );
};

export default Home;