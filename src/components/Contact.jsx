// components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3 className="contact-subtitle">Let's Work Together</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a friendly chat about technology and design.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><b>tuzaben0@gmail.com</b></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="image/call_3694366.png" />
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+250 798 362 096</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Rwanda,Kigali</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Names"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
               <div className="form-group">
                <input
                  type="text"
                  name="Nickname"
                  placeholder="Your Nickname"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
             
             
            
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Description"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;