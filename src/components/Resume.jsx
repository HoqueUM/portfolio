import React from 'react';
import resume from './resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import { LuHeartHandshake } from 'react-icons/lu';
const Resume = () => {
    return (
        <div className='bg-black'>
            <br></br>
            <header className='flex justify-center text-4xl text-white'>Resume</header>
            <header className='flex justify-center text-white'>You know, the important stuff.</header>
            <div className='h-screen px-12 py-2'><object data={resume} type='application/pdf' width='100%' height='100%'></object></div>
        </div>
    );
};

export default Resume;
