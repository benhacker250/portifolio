// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              I'm a passionate fullstack developer and graphic designer with over 
              5 years of experience creating digital solutions. My unique combination 
              of technical and design skills allows me to bridge the gap between 
              aesthetics and functionality.
            </p>
            <p>
              I specialize in creating responsive web applications with modern 
              frameworks like React and Node.js, while also crafting compelling 
              visual identities through graphic design.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image fade-in">
            <img></img>
            <div className="design-element"></div>
            <div className="design-element"></div>
            <div className="design-element"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;