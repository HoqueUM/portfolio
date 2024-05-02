import React from 'react';
import ReactRotatingText from 'react-rotating-text';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center py-5'>
                <h1 className="text-4xl">Welcome!</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="mb-2">I am a</p>
                <div className="text-center mb-2">
                    <ReactRotatingText items={['Builder', 'Designer', 'Student']} />
                </div>
                <p>Check my about section to learn more!</p>
            </div>
        </div>
    );
};

export default Home;
