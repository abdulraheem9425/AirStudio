import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img
            src="/public/assets/images/footer.png"
            alt="Logo"
            className="w-30 mb-4"
          />
          <p className="text-sm text-gray-500 leading-relaxed">
            A comprehensive e-commerce platform tailored for small and
            medium-sized businesses in Saudi Arabia, offering seamless solutions
            for fashion and digital products.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Product</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">New In</li>
            <li className="hover:text-black cursor-pointer">Trending</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Company</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Legal</h2>
          <ul className="space-y-2 text-sm text-gray-600 mb-4">
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms of Service
            </li>
          </ul>
          <div className="flex space-x-4">
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
                <FaDribbble />
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

      <div className="text-center text-xs text-gray-400 mt-10"  >
        © AiRStudio, 2025 | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
