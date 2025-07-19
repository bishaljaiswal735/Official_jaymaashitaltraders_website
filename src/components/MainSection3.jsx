import React from "react";
import {
  UsersIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function MainSection3() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[url('/images/bg6.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay */}
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:py-20 bg-black/70">
        <div className="w-full max-w-5xl text-center space-y-6 bg-black/60 rounded-xl px-4 sm:px-6 md:px-10 py-10 sm:py-14">
          <h1
            className="text-red-500 font-light text-sm sm:text-base"
            style={{ letterSpacing: "0.5em" }}
          >
            Expert Our
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-8">
            WHAT WE CAN DO
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Client Satisfaction */}
            <div className="flex flex-col items-center text-center group">
              <UsersIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">
                CLIENT SATISFACTION
              </h3>
              <p className="text-white text-sm opacity-80 leading-relaxed px-2">
                We believe client satisfaction is earned through trust,
                consistency, and delivery. With over{" "}
                <strong>150+ government projects</strong> and{" "}
                <strong>1000+ private ventures</strong> completed, we remain a
                preferred partner across Nepal.
              </p>
            </div>

            {/* Quality */}
            <div className="flex flex-col items-center text-center group">
              <DocumentTextIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">QUALITY</h3>
              <p className="text-white text-sm opacity-80 leading-relaxed px-2">
                We supply high-grade GI nipples and pipes from leading brands like{" "}
                <strong>Mainawati</strong>, <strong>Jagdamba Steel</strong>,{" "}
                <strong>Hulas</strong>, and <strong>BST</strong>, backed by direct
                manufacturer collaborations to ensure premium quality.
              </p>
            </div>

            {/* Service */}
            <div className="flex flex-col items-center text-center group">
              <Cog6ToothIcon className="h-12 w-12 text-white group-hover:text-red-500 cursor-pointer mb-4" />
              <h3 className="text-white text-lg font-semibold mb-2">SERVICE</h3>
              <p className="text-white text-sm opacity-80 leading-relaxed px-2">
                Our service extends beyond supply — with timely delivery,
                large-scale order handling, and a responsive team to keep your
                projects running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection3;
