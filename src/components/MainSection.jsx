import React from "react";
import pipes_bg from "../assets/pipes_bg.png";

const MainSection = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/bulk_bg.jpg.webp')] bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#e4e9ec]/60"></div>

      {/* Foreground Content */}
      <div className="relative z-10 md:w-[50%] lg:w-[40%] bg-black/70 flex flex-col items-center text-white px-6 sm:px-8 md:ml-20 lg:ml-40 py-10 gap-y-3 overflow-hidden my-10">
        <h1
          className="text-red-500 text-sm sm:text-base tracking-[0.5em] text-center uppercase"
        >
          JMS Traders
        </h1>
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] text-center font-semibold mt-2 mb-4">
          COMPANY PROFILE
        </h2>
        <p className="text-center font-light text-sm sm:text-base leading-relaxed">
          Jay Maa Shitala Traders Pvt. Ltd., established in 2015 and headquartered in Dhobighat, Lalitpur, Nepal, is a trusted name in Nepal’s hardware and industrial supply sector. We are a leading manufacturer of GI Nipples and Flanges, and a reliable wholesale distributor of a wide range of GI, DI, and CI hardware products. Our product line includes high-quality GI pipes and fittings, threaded rods, brass valves, gate valves, HDPE flanges, saddles, and water meters—all designed to meet both domestic and industrial demands.
          <br /><br />
          With a strong focus on product durability, competitive pricing, and timely delivery, we have proudly contributed to numerous government and infrastructure projects across the country. Our ability to fulfill large-scale and bulk orders efficiently has positioned us as a dependable supplier for contractors, distributors, and project managers alike.
          <br /><br />
          Backed by a decade of experience, a skilled workforce, and a commitment to customer satisfaction, Jay Maa Shitala Traders Pvt. Ltd. continues to grow as one of Nepal’s most reliable partners in the hardware and pipe fittings industry. We aim not only to deliver products—but to deliver trust, value, and long-term partnership to every client we serve.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
