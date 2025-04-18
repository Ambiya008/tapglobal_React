import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.scss';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <section className="banner-section">
          <Slider {...sliderSettings}>
            <div className="banner-slide" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.85), rgba(42, 82, 152, 0.85)), url(${banner1})` }}>
              <div className="slide-content">
                <h1>Strategic Solutions for Business Success</h1>
                <p>Empowering businesses through strategic transformation and sustainable growth</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="cta-button primary">Get Started</Link>
                  <Link to="/services" className="cta-button secondary">Our Services</Link>
                </div>
              </div>
            </div>
            <div className="banner-slide second" style={{ backgroundImage: `linear-gradient(rgba(42, 82, 152, 0.85), rgba(30, 60, 114, 0.85)), url(${banner2})` }}>
              <div className="slide-content">
                <h1>Expert Business Consulting</h1>
                <p>Driving growth through innovative strategies and proven methodologies</p>
                <div className="cta-buttons">
                  <Link to="/services" className="cta-button primary">Explore Services</Link>
                  <Link to="/case-studies" className="cta-button secondary">View Case Studies</Link>
                </div>
              </div>
            </div>
            <div className="banner-slide third" style={{ backgroundImage: `linear-gradient(rgba(36, 59, 85, 0.85), rgba(20, 30, 48, 0.85)), url(${banner3})` }}>
              <div className="slide-content">
                <h1>Global Business Excellence</h1>
                <p>Your trusted partner in business transformation and sustainable success</p>
                <div className="cta-buttons">
                  <Link to="/about" className="cta-button primary">About Us</Link>
                  <Link to="/contact" className="cta-button secondary">Contact Us</Link>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;