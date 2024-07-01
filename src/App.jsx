import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
/* import Image from './assets/images/Group8.png'; */

function App() {
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      // Add your scroll logic here
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="container shadow-sm px-3">
        <Header />
        <div className="row row1" id="about">
          <AboutMe />
          <div className="col-12 row2 col-md-4">
            {/* <img src={Image} height="200px" alt="Profile" style={{ borderRadius: '30%' }} /> */}
            <div className="d-flex align-items-center justify-content-center mt-3">
              <a href="mailto:kvngsley019@gmail.com" style={{ textDecoration: 'none' }}>
                <span className="color-button ms-3 ms-md-0 px-2 py-1 px-lg-3 py-lg-2 vietnamPro text-dark">
                  <big>Hire me</big>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
