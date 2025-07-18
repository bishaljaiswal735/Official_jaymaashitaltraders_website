import React, { useEffect, useState } from "react";
import pipeImage from "../assets/pipes.png";
import flange from "../assets/flange.png";
import useWindowWidth from "./useWindowWidth";
import Navbar from "./Navbar";
const images = [pipeImage, flange];
const HeroSection = () => {
  const WindowWidth = useWindowWidth();
  const [imgIndex, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const timer_interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length); // Go to next image
        setFade(true); // Show the new image (fade-in)
      }, 200);
    }, 3000);

    return () => clearTimeout(timer_interval);
  }, []);
  return (
    <div className="relative w-full h-screen min-h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8]  ">
      {/* SVG Background Circle with Gradient */}
      <svg
        className="absolute top-0 right-0 w-[70%] h-[90%] md:w-[60%] lg:w-[60%]"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx={400}
          cy={WindowWidth < 640 ? -150 : 0}
          r={400}
          fill="url(#fadeGradient)"
        />
      </svg>
      <Navbar/>
      <div className="relative w-full h-[75%] flex  ">
        <div className={`absolute ${(WindowWidth < 768)? "-bottom-10 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center":" bottom-0 right-10"}  overflow-hidden rounded-[125px] `}>
          <img
            src={images[imgIndex]}
            alt="pipes"
            className={` object-cover   md:w-[clamp(400px,40vw,550px)] h-auto transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0 -z-10"
            }`}
          />
        </div>
        <div className={`flex flex-col text-center max-w-3xl mx-auto mt-16 ${(WindowWidth > 768)?"ml-[clamp(5px,_calc(-104.2px+14.3vw),_96px)] max-w-[clamp(300px,54vw,768px)]":" "} md:pt-32 z-10 `}>
          <p
            className="text-[16px] md:text-[clamp(16px,1.3vw,18px)] uppercase"
            style={{
              fontFamily: "Cambay, sans-serif",
              letterSpacing: "0.5em",
            }}
          >
            Forging <span className="text-red-600">Strength.</span> Delivering{" "}
            <span className="text-red-600">Trade.</span>
          </p>
          <h1
            className="text-4xl md:text-[clamp(32px,3.4vw,48px)] font-bold mt-4 pr-6"
            style={{
              fontFamily: '"Coda Caption", sans-serif',
            }}
          >
            JAY MAA SHITALA TRADERS PVT. LTD.
          </h1>
          <p
            className="text-[clamp(20px,3.9vw,24px)] md:text-[clamp(20px,1.71vw,24px)] mt-10"
            style={{
              fontFamily: '"Abhaya Libre", serif',
            }}
          >
            Top Manufacturer of <span className="text-red-600">GI Nipple</span>{" "}
            & <span className="text-red-600">Flange</span> in Nepal
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
