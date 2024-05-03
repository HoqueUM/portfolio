import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Home = () => {
    const options = {
        fullScreen: { enable: false },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#ffffff"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 1, max: 8 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        }
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className=" h-screen bg-black">
            <Particles options={options} init={particlesInit} className="top-0 left-0 w-full h-full z-0"/>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-left text-white z-1">
            <div>
              <h1 className='text-5xl'>Welcome.</h1>
              <div className="flex flex-col justify-center items-center">
                <p className="mb-2 text-3xl">I am a</p>
                <div className="text-center text-3xl mb-2">
                  <ReactRotatingText items={['Builder', 'Designer', 'Student']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Home;
