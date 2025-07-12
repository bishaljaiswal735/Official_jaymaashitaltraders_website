import { MapPinIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

function LastSection() {
  return (
    <div className="w-full bg-[#f3f7fa] text-gray-800 py-16 px-6 flex flex-col items-center">
      {/* Title Section */}
      <h4 className="text-red-500 uppercase tracking-[0.3em] text-sm mb-2">Contact Us</h4>
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12">GET IN TOUCH</h2>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl text-center">
        {/* Location */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center w-full justify-center space-x-4">
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
            <MapPinIcon className="h-6 w-6 text-red-500" />
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Dhobhighat-02,Lalitpur,Nepal     </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center w-full justify-center space-x-4">
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
            <PhoneIcon className="h-6 w-6 text-red-500" />
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
          </div>
          <p className="text-sm leading-relaxed">
            Phone: +977 98186 07337, +977 98417 65369
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center w-full justify-center space-x-4">
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
            <PaperAirplaneIcon className="h-6 w-6 text-red-500" />
            <div className="w-[40%] h-[1px] bg-gray-400"></div>
          </div>
          <p className="text-sm leading-relaxed">
            Email: <a href="mailto:jaymaashitalatraders735@gmail.com" className="underline">jaymaashitalatraders735@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-xs text-gray-500 text-center">
        Copyright ©2025 Jay Maa Shitala Traders Pvt. Ltd.
      </div>
    </div>
  );
}

export default LastSection;
