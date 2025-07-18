import React, { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";
import { FaBars, FaTimes } from "react-icons/fa";
import whatsapp_logo from "../assets/whatsapp_logo.png";
import { Link } from "react-router-dom";
import logo_company from "../assets/logo_company.png";

function Navbar() {
  const menuList = ["HOME", "PRODUCT", "PRICING", "CONTACT"];
  const pathMap = {
    HOME: "/",
    PRODUCT: "/product",
    PRICING: "/pricing",
    CONTACT: "/contact",
  };

  const WindowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Compact Sticky Navbar */}
      <div className="sticky top-0 z-40 w-full bg-[#dae3e8]/80 backdrop-blur-sm shadow-md">
        <nav className="relative w-[90%] flex flex-row items-center justify-between mx-auto py-1"> {/* Reduced py */}
          <Link to="/" className="cursor-pointer">
            <img
              src={logo_company}
              alt="logo"
              className="h-[clamp(30px,7vw,50px)]"
            />
          </Link>

          <ul className="md:flex items-center gap-x-[clamp(20px,5vw,64px)] font-semibold hidden">
            {menuList.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-red-500 transition-all duration-200 relative group"
              >
                <Link to={pathMap[item]} className="text-[clamp(12px,1.1vw,18px)] ">
                  {item}
                </Link>
                <div className="absolute bottom-0 h-0.5 w-full bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-200"></div>
              </li>
            ))}
            <li className="flex items-center gap-[clamp(4px,0.5vw,8px)] ml-[clamp(12px,2vw,32px)]">
              <img
                src={whatsapp_logo}
                alt="logo2"
                className="h-[clamp(20px,2.5vw,32px)]"
              />
              <span className="text-[clamp(12px,1vw,16px)]">9818607337</span>
            </li>
          </ul>

          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-500 hover:text-red-500 transition-colors"
            >
              {isOpen && <FaBars className="w-6 h-6 fill-current" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Same as before but with adjusted spacing */}
      <div
        className={`fixed top-0 right-0 w-[50%] h-screen bg-gray-300/90
          transform ${isOpen ? "translate-x-full" : "translate-x-0"}
          transition-transform duration-300 ease-in-out
          md:hidden z-50`}
      >
        <ul className="flex flex-col space-y-3 pl-3 justify-between h-full text-black text-[clamp(12px,2.2vw,16px)]">
          <li className="pt-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-red-500 transition-colors cursor-pointer absolute top-2 right-2"
            >
              <FaTimes className="w-5 h-5 fill-current" />
            </button>
          </li>
          {menuList.map((items) => (
            <li
              key={items}
              className="cursor-pointer hover:text-red-500 transition-all duration-200 relative group inline-block mx-4"
            >
              <Link
                to={pathMap[items]}
                onClick={() => setIsOpen(true)}
                className="inline-block py-1"
              >
                {items}
              </Link>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500
                   transform scale-x-0 group-hover:scale-x-100 
                   transition-transform duration-200 ease-out cursor-pointer"
              ></div>
            </li>
          ))}
          <li className="flex flex-row gap-[clamp(4px,0.5vw,8px)] mt-auto mb-6">
            <img
              src={whatsapp_logo}
              alt="logo2"
              className="h-[clamp(20px,2.5vw,32px)]"
            />
            <span className="text-[clamp(12px,2.2vw,16px)]">
              +977-9818607337
            </span>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
    </>
  );
}

export default Navbar;