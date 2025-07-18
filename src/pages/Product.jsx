import React, { useState, useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  CubeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CutRectangle from "../components/CutRectangle";
import useWindowWidth from "../components/useWindowWidth";
import Navbar from "../components/Navbar";

const MainProducts = [
  {
    path: "/images/ginipple.webp",
    label: "GI Nipple",
    brand: "Mainawati, Jagdamba, HIPCO",
    Size: "Diameter: 1/2inch to 8inch, Length starts from 2inch",
  },
  {
    path: "/images/msflange.png",
    label: "MS Flange",
    brand: "Jagdamba, Hulas",
    Size: "1/2inch to 8inch",
  },
  {
    path: "/images/giFlange.jpeg",
    label: "GI Flange",
    brand: "All",
    Size: "1/2inch to 8inch",
  },
  {
    path: "/images/Threaded Rod.jpg",
    label: "Threading In Rod",
    brand: "All",
    Size: "Threading in all mm rod",
  },
  {
    path: "/images/msSocket.jpeg",
    label: "MS Socket",
    brand: "MS",
    Size: "1/2inch to 2inch",
  },
];

const OtherProducts = [
  {
    path: "/images/GateValve.jpg",
    label: "Gate Valve",
    brand: "Shree, Devi, Chinese",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giSocket.jpeg",
    label: "GI Socket",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giElbow.jpeg",
    label: "GI Elbow",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giTee.jpeg",
    label: "GI Tee",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giUnion.jpeg",
    label: "GI Union",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giRSocket.jpeg",
    label: "GI R.Socket",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/giCrosstee.jpeg",
    label: "GI Crosstee",
    brand: "Kriti, Unik, Sun",
    Size: "All Sizes Available",
  },
  {
    path: "/images/sluicevalve.jpeg",
    label: "Sluice Valve",
    brand: "Indian, Chinese",
    Size: "All Sizes Available",
  },
  {
    path: "/images/Saddle.jpg",
    label: "Saddle",
    brand: "Era",
    Size: "All Sizes Available",
  },
  {
    path: "/images/WaterMeter.webp",
    label: "Water Meter",
    brand: "Amit Water Meter",
    Size: "All Sizes Available",
  },
  {
    path: "/images/Ferrul.jpeg",
    label: "Ferrule",
    brand: "Ankur",
    Size: "Heavy, Light",
  },
];

function Product() {
  const [searchText, setSearchText] = useState("");
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const searchRef = useRef(null);
  const WindowWidth = useWindowWidth();
  const productRef = useRef({});
  const selectedRef = useRef(null);
  const [highlightedLabel, setHighlightedLabel] = useState(null);

  MainProducts.forEach((item) => {
    if (!productRef.current[item.label]) {
      productRef.current[item.label] = React.createRef();
    }
  });
  OtherProducts.forEach((item) => {
    if (!productRef.current[item.label]) {
      productRef.current[item.label] = React.createRef();
    }
  });

  function findProduct(ref, label) {
    if (ref && ref.current) {
      selectedRef.current = ref.current;
      if (WindowWidth >= 768) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        setIsMobileSearchActive(false);
      }
      setHighlightedLabel(label);
    }
  }

  useEffect(() => {
    if (!isMobileSearchActive && selectedRef.current) {
      setTimeout(() => {
        selectedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        selectedRef.current = null;
      }, 100);
    }
  }, [isMobileSearchActive]);

  useEffect(() => {
    if (highlightedLabel) {
      setTimeout(() => {
        setHighlightedLabel(null);
      }, 5000);
    }
  }, [highlightedLabel]);

  useEffect(() => {
    if (isMobileSearchActive && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isMobileSearchActive]);

  const highlightMatch = (text, search) => {
    if (!search.trim()) return text;
    const lowerText = text.toLowerCase();
    const lowerSearch = search.toLowerCase();
    const matchStart = lowerText.indexOf(lowerSearch);
    if (matchStart === -1) return text;

    const matchEnd = matchStart + search.length;
    return (
      <>
        {text.substring(0, matchStart)}
        <span className="text-red-500 font-semibold">
          {text.substring(matchStart, matchEnd)}
        </span>
        {text.substring(matchEnd)}
      </>
    );
  };

  const searchedMainProducts = MainProducts.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const searchedOtherProducts = OtherProducts.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative h-screen overflow-hidden">
      <svg
        className="absolute top-0 right-0 w-[70%] h-[90%] md:w-[60%] lg:w-[60%] -z-10 pointer-events-none"
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
          cy={WindowWidth < 768 ? -150 : 0}
          r={400}
          fill="url(#fadeGradient)"
        />
      </svg>

      <Navbar />

      <div className="flex w-full h-[calc(100vh-64px)]">
        {" "}
        {/* 64px assumes navbar height */}
        {/* Sidebar */}
        <div
          className={`flex flex-col w-[300px] ${
            WindowWidth < 768
              ? `fixed left-0 top-0 z-40 h-screen bg-[#e0e8f3] shadow-lg transition-transform duration-300 ${
                  isMobileSearchActive ? "translate-x-0" : "-translate-x-full"
                }`
              : "h-full sticky top-[64px] border-r border-gray-200 bg-[#e0e8f3] shadow-lg"
          }`}
        >
          {/* Search Box */}
          <div className="sticky top-0 bg-[#e0e8f3] p-3 shadow-sm z-10 h-16 flex items-center gap-2">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search Products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="pl-10 border border-gray-300 bg-white w-full rounded-md py-1.5 text-sm"
              />
            </div>
            {WindowWidth < 768 && (
              <button
                onClick={() => setIsMobileSearchActive(false)}
                className="p-1 text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Sidebar List */}
          <div className="overflow-y-auto flex-1 p-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {/* Main Products List */}
            <div className="mb-6">
              <h1 className="text-black/70 font-semibold text-sm border-b border-black/30 w-fit pb-1">
                Main Products
              </h1>
              <ul className="mt-2 space-y-1.5">
                {(searchText ? searchedMainProducts : MainProducts).map(
                  (item, index) => {
                    const ref = productRef.current[item.label];
                    return (
                      <li
                        key={index}
                        onClick={() => findProduct(ref, item.label)}
                        className="text-black/60 text-sm pl-2 cursor-pointer group"
                      >
                        <div className="inline-flex items-center gap-2 group-hover:text-red-500 transition-all">
                          <CubeIcon className="w-4 h-4 text-black/40 group-hover:text-red-400" />
                          <span className="whitespace-nowrap">
                            {highlightMatch(item.label, searchText)}
                          </span>
                        </div>
                        <div className="h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* Other Products List */}
            <div>
              <h1 className="text-black/70 font-semibold text-sm border-b border-black/30 w-fit pb-1">
                Other Products
              </h1>
              <ul className="mt-2 space-y-1.5">
                {(searchText ? searchedOtherProducts : OtherProducts).map(
                  (item, index) => {
                    const ref = productRef.current[item.label];
                    return (
                      <li
                        key={index}
                        onClick={() => findProduct(ref, item.label)}
                        className="text-black/60 text-sm pl-2 cursor-pointer group"
                      >
                        <div className="inline-flex items-center gap-2 group-hover:text-red-500 transition-all">
                          <CubeIcon className="w-4 h-4 text-black/40 group-hover:text-red-400" />
                          <span className="whitespace-nowrap">
                            {highlightMatch(item.label, searchText)}
                          </span>
                        </div>
                        <div className="h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Mobile Search Toggle */}
          {WindowWidth < 768 && (
            <button
              onClick={() => setIsMobileSearchActive(true)}
              className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-10"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          )}

          <section className="mb-8 bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8] ">
            <h1 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2 ">
              Main Products
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {MainProducts.map((item, index) => {
                const ref = productRef.current[item.label];
                return (
                  <CutRectangle
                    key={`main-${index}`}
                    ref={ref}
                    src={item.path}
                    name={item.label}
                    brand={item.brand}
                    size={item.Size}
                    isHighlighted={highlightedLabel === item.label}
                  />
                );
              })}
            </div>
          </section>

          <section className="bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8]">
            <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
              Other Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {OtherProducts.map((item, index) => {
                const ref = productRef.current[item.label];
                return (
                  <CutRectangle
                    key={`other-${index}`}
                    ref={ref}
                    src={item.path}
                    name={item.label}
                    brand={item.brand}
                    size={item.Size}
                    isHighlighted={highlightedLabel === item.label}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Product;
