import React from "react";
import CutRectangle from "./CutRectangle";
const image_label = [
  { image: "/images/ginipple.webp", label:"GI Nipple" },
  { image: "/images/flanges.webp", label:"Flanges" },
  { image: "/images/GateValve.jpg", label:"Gate Valve" },
  { image: "/images/Fitting.jpg.webp", label:"GI Fitting" },
  { image: "/images/Threaded Rod.jpg", label:"Threaded Rod" },
  { image: "/images/Saddle.jpg", label:"Saddle" },
  { image: "/images/WaterMeter.webp", label:"Water Meter" },
  { image: "/images/msflange.png", label:"MS Flange" },
];

function MainSection1() {
  return (
    <div className="w-full relative flex flex-col items-center mt-32 gap-y-1 bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8] pb-32">
      <h1
        className="text-red-500 font-normal text-[14px]"
        style={{ letterSpacing: "0.5em" }}
      >
        LATEST
      </h1>
      <h2 className="text-[35px] font-bold  ">OUR PRODUCTS</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 sm:px-4 md:px-8 lg:px-16 gap-7 pt-7">
        {image_label.map((item, index) => (
          <CutRectangle key={index} src={item.image} name={item.label}/>
        ))}
      </div>
      <div>
        <a href="#"></a>
        <button className="text-white bg-black cursor-pointer hover:text-red-500 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 rounded-md mt-10">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default MainSection1;
