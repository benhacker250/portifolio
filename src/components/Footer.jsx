// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo">
              <span className="logo-text">TB</span>
              <span className="logo-name">Tuza Benjamin</span>
            </a>
            <p className="footer-tagline">
              Fullstack Developer & Graphic Designer
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <a href="#">Web Development</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Brand Identity</a>
              <a href="#">Fullstack Solutions</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Tuza Benjamin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;