import React from 'react';
import headshot from './headshot.jpeg'
import { LuHeartHandshake } from 'react-icons/lu';
const About = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className='flex justify-center items-center w-1/2'>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-3xl mb-2 text-left'>Hello! 👋</h1>
                    <p className='text-left max-w-md'>My name is Rahul Hoque and I am a Junior at the University of Michigan studying computer science.
                        With a strong foundation in algorithms, machine learning, and web development, I am a driven student that is pasionate about what he does.
                        Outside of coding, I can be seen at the gym, playing games, or watching anime with my friends!
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center w-1/2'>
                <img src={headshot} className='max-w-md'/>
            </div>
        </div>
    );
};

export default About;
