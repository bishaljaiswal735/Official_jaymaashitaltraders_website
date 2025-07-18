import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import useWindowWidth from "../components/useWindowWidth";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const windowWidth = useWindowWidth();
  return (
    <div className=" bg-gradient-to-b from-white to-gray-50 min-h-screen bg-gray-50 relative">
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
          cy={windowWidth < 768 ? -1000 : -150}
          r={370}
          fill="url(#fadeGradient)"
        />
      </svg>
      <Navbar/>

      <div className=" relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-center ">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-[14px] md:text-[16px] font-medium text-red-500 mb-4 "
            style={{ letterSpacing: "0.5rem" }}
          >
            Contact Our Team
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto font-light">
            Get in touch for product inquiries, bulk orders, or partnership
            opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-white mb-6">Our Office</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <address className="mt-1 text-white not-italic font-extralight">
                      Dhobhighat-02, Lalitpur
                      <br />
                      Kathmandu Valley, Nepal
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Phone Numbers
                    </h3>
                    <div className="mt-1 space-y-1 text-white font-extralight">
                      <p className="hover:text-blue-600 transition-colors">
                        <a href="tel:+9779818607337">+977 98186 07337</a>
                      </p>
                      <p className="hover:text-blue-600 transition-colors">
                        <a href="tel:+9779841765369">+977 98417 65369</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a
                        href="mailto:jaymaashitalatraders735@gmail.com"
                        className="text-blue-600 hover:text-blue-800 underline transition-colors"
                      >
                        jaymaashitalatraders735@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">
                      Business Hours
                    </h3>
                    <div className="mt-1 text-white font-extralight">
                      <p>Sunday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Find Us on Map
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.462581662091!2d85.30847531506212!3d27.70550538279339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb3a9%3A0x1a3b6b1df1a4e21a!2sDhobighat%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 text-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold  mb-6">Send Us a Message</h2>
            <form
              className="space-y-6"
              action="https://formsubmit.co/bishaljaiswal735@gmail.com"
              method="POST"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium ">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium ">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Product Inquiry</option>
                  <option>Bulk Order</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={""}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Quick Contact Banner */}
      <div className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-extralight">
                Need immediate assistance?
              </h3>
              <p className="text-gray-300 font-extralight">
                Our team is ready to help with your inquiries.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:+9779818607337"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <PhoneIcon className="-ml-1 mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/9779818607337"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
