import React, { forwardRef } from "react";

const CutRectangle = forwardRef((props, ref) => {
  const hasDetails = props.brand || props.size || props.description || props.price;

  return (
    <div ref={ref} className="w-full relative flex flex-col items-center group">
      {/* SVG Container */}
      <div className="w-full relative transition-all duration-300 transform group-hover:scale-105 group-hover:z-10 ">
        <svg
          viewBox="0 0 349.325 225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full drop-shadow-sm group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] "
        >
          <defs>
            <clipPath id="clip-rect">
              <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.325 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.325 a 6 6 0 0 1 -6 -6 z" />
            </clipPath>
            <linearGradient id="imageOverlay" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
            </linearGradient>
          </defs>

          <path
            d="m 0 6 a 6 6 0 0 1 6 -6 h 250.325 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.325 a 6 6 0 0 1 -6 -6 z"
            fill="white"
            stroke="#818597"
            strokeWidth="3"
            strokeOpacity="0.15"
          />
          
          <g clipPath="url(#clip-rect)">
            <image
              href={props.src}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#imageOverlay)"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </g>
        </svg>

        {hasDetails && (
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-[14px] md:text-[clamp(14px,1.14vw,16px)] font-bold truncate">{props.name}</h3>
            <p className="text-[12px] md:text-[clamp(12px,0.98vw,14px)] opacity-90">{props.brand}</p>
          </div>
        )}
      </div>

      <div className={`w-full transition-all duration-300 transform group-hover:scale-105 ${hasDetails ? 'mt-2 p-4 bg-white rounded-b-lg shadow-sm min-h-[120px]' : 'mt-3 min-h-[60px]'} flex flex-col `}>
        {hasDetails ? (
          <>
            <div className="flex flex-col gap-2 text-sm flex-grow relative">
              <div>
                <p className="font-medium text-gray-500">Size</p>
                <p>{props.size}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 w-full">
                <a href="https://wa.me/9779818607337">
                  <button className="bg-blue-400 w-full p-1 cursor-pointer">Get Latest Price</button>
                </a>
              </div>
            </div>
            {props.description && (
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{props.description}</p>
            )}
          </>
        ) : (
          <h3 className="font-light text-black/60 text-center">{props.name}</h3>
        )}
      </div>
    </div>
  );
});

export default CutRectangle;
