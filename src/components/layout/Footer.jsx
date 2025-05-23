import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:relative left-8 ">
        <div className="">
          <img
            src="/assets/images/footer.png"
            alt="Logo"
            className="w-30 mb-4  ml-15"
          />
          <p className="text-sm text-gray-500 leading-relaxed text-center">
            A comprehensive e-commerce <br/> platform tailored for small and<br/>
            medium-sized businesses in Saudi <br/>Arabia, offering seamless solutions<br/>
            for fashion and digital products.
          </p>
        </div>

        <div className="lg:ml">
          <h2 className=" text-center text-lg mb-3">Product</h2>
          <ul className="space-y-2 text-sm text-gray-600 text-center ">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">New In</li>
            <li className="hover:text-black cursor-pointer">Trending</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
          </ul>
        </div>

        <div className="">
          <h2 className=" text-center text-lg mb-3">Company</h2>
          <ul className="space-y-2 text-sm text-gray-600 text-center">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-lg mb-3 text-center">Legal</h2>
          <ul className="space-y-2 text-sm text-gray-600 mb-4 text-center">
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms of Service
            </li>
          </ul >
          <div className="flex space-x-4 ml-23">
            <Link to="/message-chat">
              {" "}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-black text-xl"
              >
                <FaLinkedin />
              </a>
            </Link>
            <Link to="/message">
              {" "}
              <a
                href="#"
                aria-label="Dribbble"
                className="text-gray-500 hover:text-black text-xl"
              >
              <img src="/assets/images/x.png" className="w-5 h-5" alt="" />
              </a>
            </Link>
            <Link to="/account-edit">
              {" "}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-black text-xl"
              >
                <FaFacebook />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 lg:relative top-8"  >
        © AiRStudio, 2025 | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
