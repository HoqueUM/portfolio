import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import { loadFull } from "tsparticles";
import Particles from 'react-particles'
import { useCallback } from "react";
import { useState, useEffect } from 'react';

const Home = () => {
    const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the navigation bar
    const navBar = document.getElementById('head');
    if (navBar) {
      const height = navBar.offsetHeight;
      setNavHeight(height - 55);
    }
  }, []);

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
        <div className="bg-black relative">
          <div className="flex flex-col justify-center items-center h-screen text-white" style={{ paddingTop: navHeight }}>
            <h1 className="text-7xl">Welcome.</h1>
            <p className="text-3xl">I am a</p>
            <ReactRotatingText className="text-3xl" items={['Builder', 'Developer', 'Student']} />
          </div>
          <Particles options={options} init={particlesInit} className="absolute top-0 left-0 w-full h-full z-0" style={{ paddingTop: navHeight }} />
        </div>
      );
    };

export default Home;
