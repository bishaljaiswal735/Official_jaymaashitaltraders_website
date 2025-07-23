import React from "react";

const MainSection2 = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-end bg-[url('/images/bulk_bg.jpg.webp')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#e4e9ec]/60 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full md:w-[70%] lg:w-[50%] bg-black/70 text-white px-6 sm:px-10 md:px-12 py-12 md:py-16 rounded-lg shadow-xl mx-4 md:mx-0 md:mr-20 lg:mr-40">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* OUR VISION */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-500 tracking-wider">
            OUR VISION
          </h1>
          <p className="text-sm sm:text-base lg:text-[16px] font-light leading-relaxed">
            At Jay Maa Shitala Traders Pvt. Ltd., our vision is to become Nepal’s
            most trusted and innovative leader in the hardware and industrial
            supply sector. We aim to set new benchmarks in product quality,
            reliability, and customer service, while empowering infrastructure
            development across the nation. By delivering durable and
            high-performance products, we aspire to build long-term partnerships
            grounded in integrity, consistency, and mutual success.
          </p>

          {/* OUR MISSION */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-red-500 tracking-wider pt-4">
            OUR MISSION
          </h2>
          <p className="text-sm sm:text-base lg:text-[16px] font-light leading-relaxed">
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
    </div>
  );
};

export default MainSection2;
