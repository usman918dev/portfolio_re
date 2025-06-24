import React from 'react';
import './LandingPage.css';
import { ReactComponent as MyIcon } from '../assets/developer-icon.svg';

import Type from './Type';

const LandingPage = () => {

    return (
        <section className='landing-main' id='home'>
            <div className='landing-page'>
                <div className='intro-section'>
                    <span className='greeting'>Hello I'm</span>
                    <div className='user-name'>
                        <br />Muhammad Usman <br />
                        <span className='dynamic-role'><Type /></span>
                    </div>
                    <p className='bio-text'>Combining art and code to craft digital masterpieces
                        I design and develop digital experiences that inpire and delight, turning ideas into reality
                    </p>
                    <br /><br />
                    <button className="resume-btn">Download Resume</button>
                </div>
                <div className='image-container'>
                    <MyIcon className='profile-image' alt="Developer Icon" />
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
