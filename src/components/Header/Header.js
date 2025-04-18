import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BusinessIcon from '@mui/icons-material/Business';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HandshakeIcon from '@mui/icons-material/Handshake';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Tap Global" />
        </Link>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link to="/services">
                Services
                <KeyboardArrowDownIcon className="dropdown-arrow" />
              </Link>
              <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'active' : ''}`}>
                <li>
                  <Link to="/services/enterprise-strategy">
                    <BusinessIcon className="menu-icon" />
                    Enterprise Strategy
                  </Link>
                </li>
                <li>
                  <Link to="/services/turnaround-management">
                    <AutorenewIcon className="menu-icon" />
                    Turn around management
                  </Link>
                </li>
                <li>
                  <Link to="/services/mergers-acquisitions">
                    <HandshakeIcon className="menu-icon" />
                    Mergers and Acquisitions
                  </Link>
                </li>
              </ul>
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="contact-btn">Get Started</button>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;