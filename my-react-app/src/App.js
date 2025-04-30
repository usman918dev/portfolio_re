
import React from 'react';
import SocialBar from './components/socailbar/Socailbar';
import './App.css'; 
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/main/LandingPage';
import AboutMe from './components/about/Aboutme';
import Projects from './components/project/Project';
import Experience from './components/experience/Experience';
import ContactMe from './components/contaceme/ContactMe';
import Footer from './components/footer/Footer';
import Bg from './components/bg/Bg';
function App() {
  return (
    <div className="App">
      <SocialBar />
      <Navbar />
      
      <LandingPage/>
      {/* <hr/>
      <AboutMe/>
      <Projects/>
      <Experience/>
      <ContactMe/>
      <Footer/>
      <Bg/> */}
    </div>
  );
}

export default App;
