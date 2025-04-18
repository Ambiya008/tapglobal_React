import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/images/tap-logo-white.png" alt="TAP Global" />
            </div>
            <p>Transforming businesses through strategic excellence and innovative solutions.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/company">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/turnaround-management">Turnaround Management</Link></li>
              <li><Link to="/services/strategic-planning">Strategic Planning</Link></li>
              <li><Link to="/services/operational-excellence">Operational Excellence</Link></li>
              <li><Link to="/services/digital-transformation">Digital Transformation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>Email: info@tapglobal.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Avenue<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <span>&copy; {new Date().getFullYear()} TAP Global. All rights reserved.</span>
            <span className="separator">|</span>
            <span className="tech-partner">Technology Partner - <a href="https://fritado.com" target="_blank" rel="noopener noreferrer">Fritado AI</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;