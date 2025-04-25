import React from "react";
import {
  Globe,
  MapPin,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-12 py-10 px-4 sm:px-6">
      <div className="col-span-12 lg:col-span-3 ml-8 lg:p-6 sm:w-fit rounded-lg shadow-sm mt-10">
        <div className="flex items-center gap-3 mb-5 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600 border rounded-full h-8 w-8 p-1"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div className="text-gray-600">
            <p>+012 345 678 102</p>
            <p>+012 345 678 102</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <Globe className="text-blue-700 w-8 h-8 border rounded-full p-1" />
          <div className="text-gray-600">
            <p>yourname@email.com</p>
            <p>yourwebsitename.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-5">
          <MapPin className="text-blue-700 w-8 h-8 border rounded-full p-1" />
          <div className="text-gray-600">
            <p>Address goes here,</p>
            <p>Street, Crossroad 123.</p>
          </div>
        </div>

        <h4 className="text-center text-2xl text-blue-700 font-semibold mt-6">
          Follow Us
        </h4>
        <div className="flex justify-center gap-4 mt-4">
          <Instagram />
          <Twitter />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8  bg-white lg:px-5 px-4 sm:px-6  shadow-sm mt-9 rounded-lg">
        <h2 className="text-blue-600 text-3xl font-semibold  p-10 px-5 ">
          Get In Touch
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Subject*"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          />

          <div className="flex items-center border border-gray-300 px-4 py-2 rounded-md gap-2">
            <img
              src="/assets/images/contact/flag.png"
              alt="Flag"
              className="w-6 h-4"
            />
            <ChevronDown className="text-gray-500" />
            <input
              type="text"
              placeholder="+1 (702) 123-4567"
              className="w-full focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          ></textarea>

          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 mb-5 px-6 rounded-full"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
