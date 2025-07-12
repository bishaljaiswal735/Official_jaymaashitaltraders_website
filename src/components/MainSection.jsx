import React from "react";
import pipes_bg from "../assets/pipes_bg.png";

const MainSection = () => {
  return (
    <div className="relative w-full h-screen flex ">
      <div className="absolute inset-0 bg-[url('/images/bulk_bg.jpg.webp')] bg-cover bg-center "></div>
      <div className="absolute inset-0 bg-[#e4e9ec]/60"></div>{" "}
      {/* Transparent overlay */}
      <div className="relative z-10 md:w-[50%] lg:w-[40%] bg-black/70 flex flex-col items-center text-white px-7 md:ml-20 lg:ml-40 my-auto py-10 gap-y-2.5 overflow-hidden">
        <h1
          className="text-red-500"
          style={{
            letterSpacing: "0.5em",
          }}
        >
          JMS Traders
        </h1>
        <h2 className="text-[35px] md:text-[35px] lg:text-[40px]">COMPANY PROFILE</h2>
        <p className="text-center font-light pt-7 text-[14px] md:text-[14px]">
          Jay Maa Shitala Traders Pvt. Ltd., established in 2015 and
          headquartered in Dhobighat, Lalitpur, Nepal, is a trusted name in
          Nepal’s hardware and industrial supply sector. We are a leading
          manufacturer of GI Nipples and Flanges, and a reliable wholesale
          distributor of a wide range of GI, DI, and CI hardware products. Our
          product line includes high-quality GI pipes and fittings, threaded
          rods, brass valves, gate valves, HDPE flanges, saddles, and water
          meters—all designed to meet both domestic and industrial demands. With
          a strong focus on product durability, competitive pricing, and timely
          delivery, we have proudly contributed to numerous government and
          infrastructure projects across the country. Our ability to fulfill
          large-scale and bulk orders efficiently has positioned us as a
          dependable supplier for contractors, distributors, and project
          managers alike. Backed by a decade of experience, a skilled workforce,
          and a commitment to customer satisfaction, Jay Maa Shitala Traders
          Pvt. Ltd. continues to grow as one of Nepal’s most reliable partners
          in the hardware and pipe fittings industry. We aim not only to deliver
          products—but to deliver trust, value, and long-term partnership to
          every client we serve
        </p>
      </div>
    </div>
  );
};

export default MainSection;
