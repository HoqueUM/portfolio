import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import tsParticles from "react-tsparticles";
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
        <div className="w-screen h-screen bg-black">
          <Particles options={options} init={particlesInit}/>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-center">
            <div className="ml-4 text-left text-white"> {/* Adjust the margin and alignment */}
              <h1 className="text-4xl">Welcome.</h1>
              <div className="flex flex-col justify-center items-center">
                <p className="mb-2">I am a</p>
                <div className="text-center mb-2">
                  <ReactRotatingText items={['Builder', 'Designer', 'Student']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Home;
