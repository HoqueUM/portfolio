import React from 'react';
import resume from './resume.pdf'
const Resume = () => {
    return (
        <div className='bg-black'>
            <br></br>
            <header className='flex justify-center text-4xl text-white'>Resume</header>
            <header className='flex justify-center text-white'>You know, the important stuff.</header>
            <div className='h-screen px-12 py-2'><object data={resume} alt='Rahul Hoque - Resume' type='application/pdf' width='100%' height='100%'>
            <p>Sorry, your browser doesn't support embedded PDFs. You can <a href={resume}>download the PDF</a> instead.</p>    
            </object></div>
        </div>
    );
};

export default Resume;
