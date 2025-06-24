// src/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
