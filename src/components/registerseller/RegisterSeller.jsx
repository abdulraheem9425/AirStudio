import React from 'react';
import { ChevronDown } from "lucide-react";

const RegisterSeller = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <h2 className="text-amber-500 font-bold text-3xl mb-10 text-center">
        Register As Seller
      </h2>

      <div className="w-full max-w-6xl border border-gray-300 rounded-md p-10 md:p-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
            <label className="block text-lg mb-1">First Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Last Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Phone Number</label>
            <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md focus-within:ring-2 focus-within:ring-amber-500">
              <img src="/assets/images/contact/flag.png" alt="Flag" className="w-6 h-4" />
              <ChevronDown className="text-gray-500" />
              <input
                type="text"
                placeholder="+1 (702) 123-4567"
                className="w-full focus:outline-none px-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dob" className="block text-lg mb-1">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Store Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Store Description</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Street</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">City</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">State</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div>
            <label className="block text-lg mb-1">Zip Code</label>
            <input 
              type="number" 
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" 
            />
          </div>

          <div className="relative">
            <label className="block text-lg mb-1">Country</label>
            <input
              type="text"
              placeholder="Select"
              className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <ChevronDown className="absolute right-3 top-10 text-gray-500 pointer-events-none" />
          </div>

        </form>

        <div className="w-full flex justify-center mt-10">
          <button className="bg-amber-500 px-12 text-white text-lg rounded-full py-3 ">
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegisterSeller;
