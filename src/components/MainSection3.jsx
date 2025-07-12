import React from "react";
import {
  UsersIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function MainSection3() {
  return (
    <div className="relative w-full flex flex-col h-screen bg-[url('/images/bg6.jpg')] bg-cover bg-center bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8]">
      <div className="relative w-full max-w-[1000px] items-center bg-black/70 text-center mx-auto my-auto space-y-3 px-4 sm:px-6 md:px-10 py-8 rounded-lg">
        <h1
          className="text-red-500 font-light text-[16px]"
          style={{ letterSpacing: "0.5em" }}
        >
          Expert Our
        </h1>
        <h2 className="text-white text-2xl sm:text-3xl md:text-[40px] mb-12">WHAT WE CAN DO</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10">
          {/* Client Satisfaction */}
          <div className="flex flex-col items-center text-center group">
            <UsersIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-6" />
            <h1 className="text-white text-lg font-semibold mb-2">
              CLIENT SATISFACTION
            </h1>
            <p className="text-white text-sm opacity-80 leading-6 px-2">
              We believe client satisfaction is earned through trust,
              consistency, and delivery. With over{" "}
              <strong>150+ government projects</strong> and{" "}
              <strong>1000+ private ventures</strong> completed, we remain a
              preferred partner across Nepal.
            </p>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center text-center group">
            <DocumentTextIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-6" />
            <h1 className="text-white text-lg font-semibold mb-2">QUALITY</h1>
            <p className="text-white text-sm opacity-80 leading-6 px-2">
              We supply high-grade GI nipples and pipes from leading brands like{" "}
              <strong>Mainawati</strong>, <strong>Jagdamba Steel</strong>,{" "}
              <strong>Hulas</strong>, and <strong>BST</strong>, backed by direct
              manufacturer collaborations to ensure premium quality.
            </p>
          </div>

          {/* Service */}
          <div className="flex flex-col items-center text-center group">
            <Cog6ToothIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-6" />
            <h1 className="text-white text-lg font-semibold mb-2">SERVICE</h1>
            <p className="text-white text-sm opacity-80 leading-6 px-2">
              Our service extends beyond supply — with timely delivery,
              large-scale order handling, and a responsive team to keep your
              projects running smoothly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection3;
