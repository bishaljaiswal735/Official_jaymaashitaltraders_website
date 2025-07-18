import React from "react";

const GiTablePriceList = ({ title, wallpaper, data, sizes, color, note }) => {
  return (
    <div className="p-4 md:flex md:flex-col md:items-center">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-[1100px]">
        {/* Header */}
        <h2
          className={`text-xl font-bold px-4 pt-4 pb-2 border-b border-gray-200 ${color}`}
        >
          {title}
        </h2>

        {/* TABLE with background + scroll */}
        <div
          className={`bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="bg-white/60 overflow-x-auto">
            <table className="min-w-[1000px] text-sm text-left mx-auto">
              <thead
                className={`${color.replace(
                  "bg",
                  "bg-opacity-80"
                )} text-gray-700 font-semibold`}
              >
                <tr>
                  <th className="border p-2">Item</th>
                  {sizes.map((size) => (
                    <th key={size} className="border p-2">
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition">
                    <td className="border p-2 font-medium">{item.item}</td>
                    {sizes.map((size) => (
                      <td key={size} className="border p-2">
                        {item.sizes[size] !== undefined
                          ? item.sizes[size]
                          : "----"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <p
          className={`text-[14px] text-gray-500 px-4 py-2 border-t border-gray-200 ${color}`}
        >
          {note}
        </p>
      </div>
    </div>
  );
};

export default GiTablePriceList;
