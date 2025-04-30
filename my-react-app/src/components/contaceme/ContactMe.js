// src/ContactMe.js
import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-me-container" id='contact'>
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">I'd love to hear from you! Fill out the form below or reach out to me directly.</p>
      <div className="contact-info">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" id="phone" name="phone" className="form-input" placeholder="Your Phone (optional)" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
