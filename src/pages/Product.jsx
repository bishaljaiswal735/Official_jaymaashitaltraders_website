import React, { useState, useRef, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  CubeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CutRectangle from "../components/CutRectangle";
import useWindowWidth from "../components/useWindowWidth";

const MainProducts = [
  {
    path: "/images/ginipple.webp",
    label: "GI Nipple",
    brand: "Mainawati, Jagdamba, HIPCO",
    Size: "Diameter: 1/2inch to 8inch, Length starts from 2inch",
  },
  {
    path: "/images/msflange.png ",
    label: "MS Flange",
    brand: "Jagdamba, Hulas",
    Size: "1/2inch to 8inch",
  },
  {
    path: "/images/giFlange.jpeg ",
    label: "GI Flange",
    brand: "All",
    Size: "1/2inch to 8inch",
  },
  {
    path: "/images/Threaded Rod.jpg ",
    label: "Threading In Rod",
    brand: "All",
    Size: "Threading in all mm rod",
  },
  {
    path: "/images/msSocket.jpeg ",
    label: "MS Socket",
    brand: "MS",
    Size: "1/2inch to 2inch",
  },
];

const OtherProducts = [
  { path: "/images/GateValve.jpg ", label: "Gate Valve" },
  { path: "/images/giSocket.jpeg ", label: "GI Socket" },
  { path: "/images/giElbow.jpeg ", label: "GI Elbow" },
  { path: "/images/giTee.jpeg ", label: "GI Tee" },
  { path: "/images/giUnion.jpeg ", label: "GI Union" },
  { path: "/images/giRSocket.jpeg ", label: "GI R.Socket" },
  { path: "/images/giCrosstee.jpeg ", label: "GI Crosstee" },
  { path: "/images/sluicevalve.jpeg ", label: "Sluice Valve" },
  { path: "/images/Saddle.jpg ", label: "Saddle" },
  { path: "/images/WaterMeter.webp ", label: "Water Meter" },
  { path: "/images/Ferrul.jpeg ", label: "Ferrule" },
];

function Product() {
  const [searchText, setSearchText] = useState("");
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const searchRef = useRef(null);
  const WindowWidth = useWindowWidth();
  const productRef = useRef({});
  const selectedRef = useRef(null);
  const [highlightedLabel, setHighlightedLabel] = useState(null);

  // For highlighting searched product
  MainProducts.forEach((item) => {
    if (!productRef.current[item.label]) {
      productRef.current[item.label] = React.createRef();
      console.log(productRef.current[item.label]);
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
        // Desktop: scroll immediately
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      } 
      else {
        // Mobile: save ref, close search, then scroll on useEffect
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

  // Auto-focus search input when mobile search is activated
  useEffect(() => {
    if (isMobileSearchActive && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isMobileSearchActive]);

  // Highlight matching text
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

  // Filter products based on search
  const searchedMainProducts = MainProducts.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const searchedOtherProducts = OtherProducts.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div
      className={` ${WindowWidth < 768 ? "flex flex-col" : "flex"} w-full ${
        isMobileSearchActive ? "h-screen" : ""
      } md:h-screen relative`}
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col w-[300px] ${
          isMobileSearchActive
            ? "border-r border-gray-200 bg-[#e0e8f3] shadow-lg z-20"
            : ""
        } md:border-r md:border-gray-200 md:bg-[#e0e8f3] md:shadow-lg ${
          WindowWidth < 768 ? "fixed  left-0 top-0 z-20 h-screen " : "h-screen"
        }`}
      >
        {/* Sticky Search - Always visible */}
        <div
          className={`sticky top-0 z-30 md:bg-[#e0e8f3] p-3 md:shadow-sm ${
            isMobileSearchActive ? "bg-[#e0e8f3] shadow-sm" : ""
          } flex items-center gap-2`}
        >
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search Products..."
              value={searchText}
              onClick={() => setIsMobileSearchActive(true)}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 border border-gray-300 bg-white w-full rounded-md py-1.5 text-sm"
            />
          </div>
          {/* Close button for mobile */}
          {isMobileSearchActive && (
            <button
              onClick={() => setIsMobileSearchActive(false)}
              className="md:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable content - Conditionally shown on mobile */}
        <div
          className={`overflow-y-auto flex-1 p-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 
          transition-all duration-300 ${
            !isMobileSearchActive ? "hidden sm:hidden md:block" : "block"
          } `}
        >
          {/* Main Products */}
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
              {searchText && searchedMainProducts.length === 0 && (
                <p className="text-gray-500 text-sm mt-2">
                  No main products found
                </p>
              )}
            </ul>
          </div>

          {/* Other Products */}
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
              {searchText && searchedOtherProducts.length === 0 && (
                <p className="text-gray-500 text-sm mt-2">
                  No other products found
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div
        className={` p-4 overflow-y-auto w-full ${
          WindowWidth < 768 ? "pt-16" : ""
        } `}
      >
        {/* MAIN PRODUCTS SECTION */}
        <section className="mb-8 bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8]">
          <h1 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
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

        {/* OTHER PRODUCTS SECTION */}
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
                  isHighlighted={highlightedLabel === item.label}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
