import React from "react";

const Waitlist = () => {
  return (
    <div className="max-w-full bg-gray-50 mx-auto px-6 py-12 sm:px-8 sm:py-16  ">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-800 mb-4">
          Join the Waitlist
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Be the first to know when we launch and get exclusive early access to our products.
        </p>
      </div>


      <div className="max-w-2xl mx-auto"> 
        <form className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-lg"
          />
          <button
            type="submit"
            className="bg-blue-800  text-white font-medium py-3 px-8 rounded-full   text-lg lg:w-60"
          >
            Subscribe here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;