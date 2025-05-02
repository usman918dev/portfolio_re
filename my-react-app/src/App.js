
import React from 'react';
import SocialBar from './components/socailbar/Socailbar';
import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/main/LandingPage';
import AboutMe from './components/about/Aboutme';

import Experience from './components/experience/Experience';
import ContactMe from './components/contaceme/ContactMe';
import Footer from './components/footer/Footer';
import Bg from './components/bg/Bg';
import ProjectCard from './components/project/ProjectCard';
import Project from './components/project/Project';

function App() {
  return (
    <div className="App">
      <SocialBar />
      <Navbar />

      <LandingPage />

      <AboutMe />

      {/* <ProjectCard
        image="https://via.placeholder.com/400x300"
        title="Smart News Aggregator"
        description="A web app that scrapes trending news from global sources and summarizes it using AI."
        techStack={['Next.js', 'Tailwind CSS', 'OpenAI API', 'Web Scraping']}
      /> */}

      <Project/>
      {/* <Experience />
      <ContactMe />
      <Footer />
      <Bg /> */}
    </div>
  );
}

export default App;
