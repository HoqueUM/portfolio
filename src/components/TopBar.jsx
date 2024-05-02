import React from 'react'

const TopBar = ({ setPage }) => {
    const handleClick = (option) => {
      setPage(option);
    };
  
    return (
      <nav>
        <div className='border flex justify-center space-x-5 py-4'>
          <div>
            <a onClick={() => handleClick('Home')}>Home</a>
          </div>
          <div>
            <a onClick={() => handleClick('About')}>About</a>
          </div>
          <div>
            <a onClick={() => handleClick('Projects')}>Projects</a>
          </div>
          <div>
            <a onClick={() => handleClick('Blog')}>Blog</a>
          </div>
          <div>
            <a onClick={() => handleClick('Contact')}>Contact</a>
          </div>
        </div>
      </nav>
    );
  };

export default TopBar