import React, { useState, useRef, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import RH from './rh.png'

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
    const navbarHeight = document.getElementById('head').offsetHeight;
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
      <div className='pt-[3.5rem] left-0' id='head'>
        <div className='fixed top-0 z-50 bg-white border-[1.5px] w-full'>
          <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg: py-4'> 
            <a className='absolute w-[rem] ' href='#hero'>
              <img src={RH} width={40} height={10} alt='logo'/>
            </a>
            <nav className='flex mx-auto static top-[5rem] left-0 '>
              <div className='relative z-2 flex flex-row items-center justify-center m-auto space-x-4'>
              <button className={`${activeSection === 'Home' && 'font-bold'}`} onClick={() => scrollToSection('Home')}>Home</button>
              <button className={` ${activeSection === 'About' && 'font-bold'}`} onClick={() => scrollToSection('About')}>About</button>
              <button className={`${activeSection === 'Resume' && 'font-bold'}`} onClick={() => scrollToSection('Resume')}>Resume</button>
              <button className={`${activeSection === 'Projects' && 'font-bold'}`} onClick={() => scrollToSection('Projects')}>Projects</button>
              </div>
            </nav>
          </div>
        </div>
      </div>
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
      <footer className='flex justify-center py-2'>Made with ❤️ by Rahul Hoque</footer>
    </div>
  );
}

export default App;
