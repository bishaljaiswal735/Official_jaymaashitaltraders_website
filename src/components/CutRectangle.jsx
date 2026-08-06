// import React, { forwardRef } from "react";

// const CutRectangle = forwardRef((props, ref) => {
//   const hasDetails = props.brand || props.size || props.description || props.price;

//   return (
//     <div ref={ref} className="w-full relative flex flex-col items-center group">
//       {/* SVG Container */}
//       <div className={`w-full relative transition-all duration-300 transform group-hover:scale-105 group-hover:z-10 ${props.isHighlighted ? "ring-2 ring-red-400 animate-pulse" : ""}`}>
//         <svg
//           viewBox="0 0 349.325 225"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="xMidYMid meet"
//           className="w-full h-full drop-shadow-sm group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
//         >
//           <defs>
//             <clipPath id={`clip-rect-${props.name}`}>
//               <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.325 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.325 a 6 6 0 0 1 -6 -6 z" />
//             </clipPath>
//             <linearGradient id={`imageOverlay-${props.name}`} x1="0" x2="0" y1="0" y2="1">
//               <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
//               <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
//             </linearGradient>
//           </defs>

//           <path
//             d="m 0 6 a 6 6 0 0 1 6 -6 h 250.325 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.325 a 6 6 0 0 1 -6 -6 z"
//             fill="white"
//             stroke="#818597"
//             strokeWidth="3"
//             strokeOpacity="0.15"
//           />

//           <g clipPath={`url(#clip-rect-${props.name})`}>
//             <image
//               href={props.src}
//               x="0"
//               y="0"
//               width="100%"
//               height="100%"
//               preserveAspectRatio="xMidYMid meet"
//             />
//             <rect
//               width="100%"
//               height="100%"
//               fill={`url(#imageOverlay-${props.name})`}
//               className="opacity-0"
            
//             />
//           </g>
//         </svg>

//         {hasDetails && (
//           <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1 sm:px-2 sm:py-1.5 md:px-4 md:py-2 bg-gradient-to-t from-black/80 to-transparent text-white">
//             <h3 className="text-[10px] sm:text-[12px] md:text-[14px] font-bold truncate leading-tight">{props.name}</h3>
//             <p className="text-[9px] sm:text-[10px] md:text-[12px] opacity-90 truncate">{props.brand}</p>
//           </div>
//         )}
//       </div>

//       <div className={`w-full transition-all duration-300 transform group-hover:scale-105 ${hasDetails ? 'mt-1 sm:mt-1.5 px-2 pt-1.5 pb-2 sm:px-3 sm:pt-2 sm:pb-3 md:p-4 bg-white rounded-b-lg shadow-sm min-h-[80px] sm:min-h-[95px] md:min-h-[115px]' : 'mt-2 min-h-[36px] sm:min-h-[48px]'} flex flex-col ${props.isHighlighted ? "ring-2 ring-red-400 animate-pulse" : ""}`}>
//         {hasDetails ? (
//           <>
//             <div className="flex flex-col gap-1 text-sm flex-grow relative">
//               <div>
//                 <p className="font-medium text-gray-500 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wide">Size</p>
//                 <p className="text-[9px] sm:text-[11px] md:text-sm text-gray-800 leading-tight">{props.size}</p>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 w-full">
//                 <a href="https://wa.me/9779818607337">
//                   <button className="bg-blue-400 hover:bg-blue-500 w-full py-0.5 sm:py-1 cursor-pointer text-[9px] sm:text-[11px] md:text-sm font-medium text-white transition-colors">
//                     Get Latest Price
//                   </button>
//                 </a>
//               </div>
//             </div>
//             {props.description && (
//               <p className="mt-1.5 text-[9px] sm:text-xs text-gray-600 line-clamp-2">{props.description}</p>
//             )}
//           </>
//         ) : (
//           <h3 className="font-light text-black/60 text-center text-[10px] sm:text-xs md:text-sm">{props.name}</h3>
//         )}
//       </div>
//     </div>
//   );
// });

// export default CutRectangle;
import React, { forwardRef } from "react";

const CutRectangle = forwardRef((props, ref) => {
  const hasDetails =
    props.brand || props.size || props.description || props.price;

  return (
    <div
      ref={ref}
      className="w-full relative flex flex-col items-center group"
    >
      {/* SVG */}
      <div
        className={`w-full relative transition-all duration-300 group-hover:scale-105 group-hover:z-10 ${
          props.isHighlighted ? "ring-2 ring-red-400 animate-pulse" : ""
        }`}
      >
        <svg
          viewBox="0 0 349.325 225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto drop-shadow-sm group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
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
          <div className="absolute bottom-0 left-0 right-0 px-2 py-2 sm:px-3 sm:py-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h3 className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-base font-bold truncate">
              {props.name}
            </h3>

            <p className="text-[10px] sm:text-[11px] md:text-[13px] opacity-90 truncate">
              {props.brand}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Card */}
      <div
        className={`w-full transition-all duration-300 group-hover:scale-105 ${
          hasDetails
            ? "mt-2 px-2 py-2 sm:px-3 sm:py-3 md:p-4 bg-white rounded-b-lg shadow-sm min-h-[90px] sm:min-h-[110px] md:min-h-[120px]"
            : "mt-2 min-h-[40px] sm:min-h-[55px]"
        } flex flex-col ${
          props.isHighlighted ? "ring-2 ring-red-400 animate-pulse" : ""
        }`}
      >
        {hasDetails ? (
          <>
            <div className="flex flex-col gap-2 flex-grow relative">
              <div>
                <p className="font-medium text-gray-500 text-[10px] sm:text-xs uppercase">
                  Size
                </p>

                <p className="text-[10px] sm:text-xs md:text-sm">
                  {props.size}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0">
                <a href="https://wa.me/9779818607337">
                  <button className="w-full bg-blue-400 hover:bg-blue-500 transition text-white text-[10px] sm:text-xs md:text-sm py-1 rounded cursor-pointer">
                    Get Latest Price
                  </button>
                </a>
              </div>
            </div>

            {props.description && (
              <p className="mt-2 text-[10px] sm:text-xs md:text-sm text-gray-600 line-clamp-2">
                {props.description}
              </p>
            )}
          </>
        ) : (
          <h3 className="text-center text-[10px] sm:text-xs md:text-sm text-black/60">
            {props.name}
          </h3>
        )}
      </div>
    </div>
  );
});

export default CutRectangle;