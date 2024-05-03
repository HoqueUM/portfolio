import React, { useState, useRef, useEffect } from 'react';
import TopBar from './components/TopBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ReactRotatingText from 'react-rotating-text';
import Scrollspy from 'react-scrollspy';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Map section IDs to their refs
  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Blog: blogRef,
    Contact: contactRef
  };

  // Function to scroll to a section
  const scrollToSection = (section) => {
    window.scrollTo({
      top: sectionRefs[section].current.offsetTop,
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
  }, []);

  return (
    <div>
      <div className='border flex justify-center space-x-5 py-4 sticky top-0 bg-white'>
        <button className={`${activeSection === 'Home' && 'font-bold'}`} onClick={() => scrollToSection('Home')}>Home</button>
        <button className={` ${activeSection === 'About' && 'font-bold'}`} onClick={() => scrollToSection('About')}>About</button>
        <button className={`${activeSection === 'Projects' && 'font-bold'}`} onClick={() => scrollToSection('Projects')}>Projects</button>
        <button className={` ${activeSection === 'Blog' && 'font-bold'}`} onClick={() => scrollToSection('Blog')}>Blog</button>
        <button className={` ${activeSection === 'Contact' && 'font-bold'}`} onClick={() => scrollToSection('Contact')}>Contact</button>
      </div>
      {/* Your sections go here */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
