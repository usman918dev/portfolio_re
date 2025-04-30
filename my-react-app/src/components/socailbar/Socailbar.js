import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Bar.css'; // Import the CSS file

const SocialBar = () => {
  return (
    <div className='container'>
      <div className="social-bar">
        <a href="https://www.linkedin.com/in/muhammad-usman-429b362a5/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:example@gmail.com" className="social-icon" aria-label="Gmail">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="https://github.com/osmanbey918" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
