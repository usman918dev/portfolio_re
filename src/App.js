import React from 'react';
import SocialBar from './components/socailbar/Socailbar';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/main/LandingPage';
import AboutMe from './components/about/Aboutme';
import Skills from './components/skills/Skills';

import Experience from './components/experience/Experience';
import ContactMe from './components/contaceme/ContactMe';
import Footer from './components/footer/Footer';
import Bg from './components/bg/Bg';
// import ProjectCard from './components/project/ProjectCard';
import Project from './components/project/Project';
import GitHub from './components/skills/GitHub';

function App() {
  return (
    <div className="App">
      <SocialBar />
      <Navbar />

      <LandingPage />

      <AboutMe />

      <Skills />
      <GitHub/>
      <Project/>

      <Experience />
      <ContactMe />
      <Footer />
      {/* <Bg /> */}
    </div>
  );
}

export default App;
