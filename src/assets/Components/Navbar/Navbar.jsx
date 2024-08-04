import React, { useState } from 'react';
import './Navbar.css';
import logo from './zerogateway-logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mynav-container">
      <nav className="navbar container">
        <div className="navbar-logo">
          <img src={logo} alt="ZeroGateway Logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <button className="login-button">Log in</button>
          <button className="signup-button">Sign up</button>
        </div>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776;
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-close" onClick={toggleSidebar}>
          &times;
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
