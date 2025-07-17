import React from "react";
import { FlangeData } from "./FlangeData";

const FlangePriceList = () => {
  return (
    <div className="p-4 md:flex md:flex-col md:items-center">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-[1100px]">
        {/* Header */}
        <h2 className="text-xl font-bold px-4 pt-4 pb-2 border-b border-gray-200 bg-[#e0e8f3]">
          Flange & Flange Set Price List
        </h2>

        {/* TABLE with background + scroll */}
        <div className="bg-[url('/images/flange_wallpaper.jpeg')] bg-cover bg-center bg-no-repeat">
          <div className="bg-white/60  overflow-x-auto">
            <table className="min-w-[1000px] text-sm text-left mx-auto">
              <thead className="bg-gray-300 text-gray-700 font-semibold">
                <tr>
                  <th className="border p-2">Size</th>
                  <th className="border p-2">MS Flange</th>
                  <th className="border p-2">GI Flange</th>
                  <th className="border p-2">MS Flange ISS/OD</th>
                  <th className="border p-2">GI Flange ISS/OD</th>
                  <th className="border p-2">MS Blind Flange</th>
                  <th className="border p-2">Flange Set</th>
                </tr>
              </thead>
              <tbody>
                {FlangeData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-200 transition">
                    <td className="border p-2">{item.size}</td>
                    <td className="border p-2">{item.msFlange ?? "----"}</td>
                    <td className="border p-2">{item.giFlange ?? "----"}</td>
                    <td className="border p-2">{item.msFlangeISSOD ?? "----"}</td>
                    <td className="border p-2">{item.giFlangeISSOD ?? "----"}</td>
                    <td className="border p-2">{item.msBlindFlange ?? "----"}</td>
                    <td className="border p-2">{item.flangeSet ?? "----"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <p className="text-[14px] text-gray-500 px-4 py-2 border-t border-gray-200 bg-[#e0e8f3]">
          * Prices include 13% VAT
        </p>
      </div>
    </div>
  );
};

export default FlangePriceList;
