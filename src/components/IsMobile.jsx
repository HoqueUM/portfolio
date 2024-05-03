import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Mobile = (props) => {
    // the point of using hooks is to use it whenever you need it (you "hook it")
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const textStyle = isMobile ? 'text-mobile' : 'text-desktop';
  
    return (
      <div className={textStyle}>
      {props.children}
      </div>
    )
  }

  export default Mobile;