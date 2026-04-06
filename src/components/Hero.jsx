// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h4 className="hero-subtitle">Hello, I'm</h4>
            <h1 className="hero-title">
              Tuza <span className="highlight">Benjamin</span>
            </h1>
            <h2 className="hero-role">
              Fullstack Developer & Graphic Designer
            </h2>
            <p className="hero-description">
              I create beautiful, functional digital experiences that blend 
              innovative design with robust development. With expertise in both 
              frontend/backend technologies and visual design, I bring a unique 
              perspective to every project.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper float">
              <div className="main-image">
                <div className="profile-bg"></div>
                <div className="profile-image"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">React</div>
                <div className="floating-element element-2">Node.js</div>
                <div className="floating-element element-3">UI/UX</div>
                <div className="floating-element element-4">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;