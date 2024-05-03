// TopBar.js
import React from 'react';
import { useRef } from 'react';

const TopBar = () => {
    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

  return (
      <div className='border flex justify-center space-x-5 py-4'>
            <ul className='flex spaxe-x-2'>
                <li onClick={() => scrollToSection(home)}>Home</li>
                <li onClick={() => scrollToSection(about)}>About</li>
                <li onClick={() => scrollToSection(projects)}>Projects</li>
                <li onClick={() => scrollToSection(blog)}>Blog</li>
                <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
      </div>
  );
};

export default TopBar;
