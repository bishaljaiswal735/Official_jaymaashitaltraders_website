import React, { useEffect, useState } from "react";
import pipeImage from "../assets/pipes.png";
import logo_company from "../assets/logo_company.png";
import whatsapp_logo from "../assets/whatsapp_logo.png";
import flange from "../assets/flange.png";
import useWindowWidth from "./useWindowWidth";
import { FaBars, FaTimes } from "react-icons/fa";
import { DivideIcon } from "@heroicons/react/24/outline";

const images = [pipeImage, flange];
const menuList = ["HOME", "PRODUCT", "PRICING", "CONTACT"];
const HeroSection = () => {
  const WindowWidth = useWindowWidth();
  const [imgIndex, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="relative w-full h-screen bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8] overflow-hidden ">
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
      <nav className="relative w-[90%] flex flex-row items-center justify-between mx-auto mt-[clamp(-20px,-2.857vw,-40px)]">
        {/* Logo - Made fluid */}
        <a href="#" className="cursor-pointer">
          <img
            src={logo_company}
            alt="logo"
            className="h-[clamp(100px,10vw,160px)] " // Fluid logo sizing
          />
        </a>

        {/* Navigation Items - Fluid text and gaps */}
        <ul className="md:flex items-center gap-x-[clamp(20px,5vw,64px)] font-semibold hidden">
          {menuList.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-red-500 transition-all duration-200 relative group"
            >
              <a
                href="#"
                className="text-[clamp(12px,1.1vw,18px)]" // Fluid text
              >
                {item}
              </a>
              <div className="absolute bottom-0 h-0.5 w-full bg-red-500 transform scale-x-0  group-hover:scale-x-100 transition-transform ease-in-out duration-200"></div>
            </li>
          ))}

          {/* WhatsApp - Fluid sizing */}
          <li className="flex items-center gap-[clamp(4px,0.5vw,8px)] ml-[clamp(12px,2vw,32px)]">
            <img
              src={whatsapp_logo}
              alt="logo2"
              className="h-[clamp(20px,2.5vw,32px)]" // Fluid icon
            />
            <span className="text-[clamp(12px,1vw,16px)]">9818607337</span>
          </li>
        </ul>
        <div className="md:hidden relative">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=" focus:outline-none text-gray-500 hover:text-red-500 transition-colors "
          >
            {isOpen && <FaBars className="w-6 h-6 fill-current" />}
          </button>
        </div>
      </nav>
       <div
          className={`
                       bg-gray-300/60 absolute top-0 right-0 w-[50%] h-screen
                        transform ${ isOpen ? "translate-x-full" : "translate-x-0"}
                         transition-transform duration-300 ease-in-out
                          md:hidden z-50
                    `}>
      
          <ul className="flex flex-col space-y-4 pl-3  text-black text-[clamp(12px,2.2vw,16px)] ">
            <li className="pb-10">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-red-500 transition-colors cursor-pointer absolute top-2 right-1.5 "
              >
                <FaTimes className="w-4.5 h-4.5 fill-current text-[2px] transition duration-500" />
              </button>
            </li>
            {menuList.map((items) => (
              <li className="cursor-pointer hover:text-red-500 transition-all duration-200 relative group inline-block mx-4">
                <a
                  href="#"
                  onClick={() => setIsOpen(true)}
                  className="inline-block"
                >
                  {items}
                </a>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500
                   transform scale-x-0 group-hover:scale-x-100 
                   transition-transform duration-200 ease-out cursor-pointer"
                ></div>
              </li>
            ))}
            <li className="flex flex-row gap-[clamp(4px,0.5vw,8px)] mt-[450px]">
              <img
                src={whatsapp_logo}
                alt="logo2"
                className="h-[clamp(20px,2.5vw,32px)]" // Fluid icon
              />
              <span className="text-[clamp(12px,2.2vw,16px)]">
                +977-9818607337
              </span>
            </li>
          </ul>
        </div>
      <div className="relative w-full h-[75%] flex ">
        <div className={`absolute ${(WindowWidth < 768)? "-bottom-10 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center":" bottom-0 right-10"}  overflow-hidden rounded-[125px]`}>
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
      { !isOpen && 
      <div className="bg-white/30 backdrop-blur-sm absolute inset-0 z-10"></div>}
    </div>
  );
};

export default HeroSection;
