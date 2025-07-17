import React from "react";
import FlangePriceList from "../price_component/FlangePriceList";
import { GiFittingsData } from "../price_component/GiFittingsData";
import { GiNipplesData } from "../price_component/GiNipplesData";
import { SaddleData } from "../price_component/SaddleData";
import GiTablePriceList from "../price_component/GiTablePriceList";
import useWindowWidth from "../components/useWindowWidth";

function Pricing() {
   const windowWidth = useWindowWidth()
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12">
      <svg
        className="absolute top-0 right-0 w-[70%] h-[90%] md:w-[60%] lg:w-[60%] z-0 pointer-events-none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx={400}
          cy={windowWidth < 768 ? -2000 : -500}
          r={400}
          fill="url(#fadeGradient)"
        />
      </svg>
      {/* Page Header */}
      <header className="text-center mb-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-3"
            style={{ letterSpacing: "0.5rem" }}
          >
            Product Pricing
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Current Price Catalogue
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent pricing for all our products. All listed prices include
            13% VAT as per government regulations.
          </p>
        </div>
      </header>

      {/* Commercial Notice */}
      <section className="max-w-5xl mx-auto mb-16 px-6 relative z-10">
        <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-red-500 mb-1">
                Commercial Purchasing Information
              </h3>
              <p className="text-gray-700">
                We offer competitive pricing for bulk orders, contractors, and
                wholesale partners. Volume discounts apply for orders exceeding
                standard quantities. Please contact our sales department for
                project-specific quotations and dealer pricing structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Pricing Sections */}
      <main className="space-y-16 max-w-7xl mx-auto px-4 relative z-10 ">
        <section>
          <FlangePriceList />
        </section>

        <section>
          <GiTablePriceList
            title="Galvanized Iron Fittings"
            subtitle="Premium quality threaded fittings for all plumbing applications"
            wallpaper="/images/gifitting_wallpaper.jpeg"
            data={GiFittingsData}
            sizes={[
              '1/2"',
              '3/4"',
              '1"',
              '11/4"',
              '11/2"',
              '2"',
              '21/2"',
              '3"',
            ]}
            color="bg-blue-50"
            note="Prices subject to change based on market conditions. Confirm with sales for large orders."
          />
        </section>

        <section>
          <GiTablePriceList
            title="Galvanized Iron Nipples"
            subtitle="Durable threaded connectors in standard lengths"
            wallpaper="/images/ginipple_wallpaper.jpeg"
            data={GiNipplesData}
            sizes={[
              '1/2"',
              '3/4"',
              '1"',
              '11/4"',
              '11/2"',
              '2"',
              '21/2"',
              '3"',
              '4"',
              '5"',
              '6"',
            ]}
            color="bg-blue-50"
            note="Special lengths available upon request. Minimum order quantities may apply."
          />
        </section>

        <section>
          <GiTablePriceList
            title="Saddle & Coupling Systems"
            subtitle="High-performance pipe joining solutions"
            wallpaper="/images/saddle_wallpaper.jpeg"
            data={SaddleData}
            sizes={[
              "25MM",
              "32MM",
              "40MM",
              "50MM",
              "63MM",
              "75MM",
              "90MM",
              "110MM",
              "125MM",
              "140MM",
              "160MM",
              "180MM",
              "200MM",
              "225MM",
              "250MM",
              "280MM",
              "315MM",
            ]}
            color="bg-blue-50"
            note="Custom configurations available for specialized applications."
          />
        </section>
      </main>

      {/* Contact Section */}
      <section className="mt-20 py-12 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-medium">Sales Support</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Request Custom Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our sales team is ready to provide competitive quotations for your
            specific requirements, including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-sm text-gray-700">
            <li className="flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Bulk order discounts
            </li>
            <li className="flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Contract pricing
            </li>
            <li className="flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Scheduled deliveries
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/9779818607337"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>
            <a
              href="tel:+9779818607337"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Sales Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
