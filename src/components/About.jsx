import React from 'react';
import headshot from './headshot.jpeg'
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const About = () => {
    return (
        <div>
            <br></br>
            <header className='flex justify-center text-4xl'>About Me</header>
            <header className='flex justify-center'>What you came he for.</header>
            <div className="h-screen flex justify-center items-center">
                <div className='flex justify-center items-center w-1/2'>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className='text-3xl mb-2 text-left'>Hello! 👋</h1>
                        <p className='text-left max-w-md mb-2'>My name is Rahul Hoque and I am a Junior at the University of Michigan studying computer science.
                            With a strong foundation in algorithms, machine learning, and web development, I am a driven student that is pasionate about what he does.
                            Outside of coding, I can be seen at the gym, playing games, or watching anime with my friends!
                        </p>
                        <div className='flex flex-row space-x-5'>
                            <a href='https://www.linkedin.com/in/rahul-hoque-6a9a6b282/' target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
                            <a href='https://github.com/HoqueUM' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href='mailto:rhoque@umich.edu'><SiGmail /></a>
                            <a href='https://www.instagram.com/rahul.s.hoque/?hl=en' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-1/2'>
                    <img src={headshot} alt='Rahul Hoque - Headshot' className='max-w-md'/>
                </div>
            </div>
        </div>
    );
};

export default About;
