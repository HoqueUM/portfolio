import React, { useState, useRef, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  // Map section IDs to their refs
  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Resume: resumeRef,
  };

  // Function to scroll to a section
  const scrollToSection = (section) => {
    const navbarHeight = document.querySelector('header').offsetHeight;
    const sectionOffsetTop = sectionRefs[section].current.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: sectionOffsetTop,
      behavior: "smooth"
    });
  };

  // Update active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section whose offset is nearest to the current scroll position
      const closestSection = Object.keys(sectionRefs).reduce((prev, curr) => {
        const ref = sectionRefs[curr];
        const offsetTop = ref.current.offsetTop;
        const distance = Math.abs(offsetTop - scrollPosition);
        return distance < Math.abs(sectionRefs[prev].current.offsetTop - scrollPosition) ? curr : prev;
      });

      setActiveSection(closestSection);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  },);

  return (
    <div>
      <header className='border flex justify-center space-x-5 py-4 sticky top-0 z-2 bg-white'>
        <button className={`${activeSection === 'Home' && 'font-bold'}`} onClick={() => scrollToSection('Home')}>Home</button>
        <button className={` ${activeSection === 'About' && 'font-bold'}`} onClick={() => scrollToSection('About')}>About</button>
        <button className={`${activeSection === 'Resume' && 'font-bold'}`} onClick={() => scrollToSection('Resume')}>Resume</button>
        <button className={`${activeSection === 'Projects' && 'font-bold'}`} onClick={() => scrollToSection('Projects')}>Projects</button>
      </header>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <footer className='flex justify-center'>Made with ❤️ by Rahul Hoque</footer>
    </div>
  );
}

export default App;
