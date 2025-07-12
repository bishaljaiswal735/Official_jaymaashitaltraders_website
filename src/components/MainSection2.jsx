import React from "react";
import pipes_bg from "../assets/pipes_bg.png";

const MainSection2 = () => {
  return (
    <div className="relative w-full h-screen flex justify-end">
      <div className="absolute inset-0 bg-[url('/images/bulk_bg.jpg.webp')] bg-cover bg-center "></div>
      <div className="absolute inset-0 bg-[#e4e9ec]/60"></div>{" "}
      {/* Transparent overlay */}
      <div className="relative  z-10 md:w-[50%] lg:w-[40%] bg-black/70 flex flex-col items-center text-white px-7 md:mr-20 lg:mr-40 my-auto py-10 gap-y-2.5">
        <h1 className="text-[35px] lg:text-[40px]">OUR VISION</h1>
        <p className="text-center font-light pt-1 mb-5 text-[14px] lg:text-[16px]">
          At Jay Maa Shitala Traders Pvt. Ltd., our vision is to become Nepal’s
          most trusted and innovative leader in the hardware and industrial
          supply sector. We aim to set new benchmarks in product quality,
          reliability, and customer service, while empowering infrastructure
          development across the nation. By delivering durable and
          high-performance products, we aspire to build long-term partnerships
          grounded in integrity, consistency, and mutual success.
        </p>
        <h2 className="text-[35px] lg:text-[40px]">OUR MISSION</h2>
        <p className="text-center font-light pt-1 text-[14px] lg:text-[16px]">
          Our mission is to manufacture and supply high-quality GI Nipples,
          Flanges, and a wide range of hardware products tailored to meet the
          growing demands of Nepal’s domestic, industrial, and infrastructure
          sectors. We are committed to ensuring product durability, timely
          delivery, and competitive pricing through strict quality control,
          skilled craftsmanship, and efficient distribution. Backed by a decade
          of industry experience, we continuously strive for improvement through
          innovation and responsive customer support. At the core of everything
          we do is a promise—not just to deliver materials, but to deliver
          value, trust, and dependable partnerships to every client we serve.
        </p>
      </div>
    </div>
  );
};

export default MainSection2;
