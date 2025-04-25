import React from "react";
import { ArrowRightIcon, Star } from "lucide-react";

const HomeHeroSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:px-10 lg:px-20 py-12 bg-white sm:py-10">
      <div className="col-span-2  h-[500px] hidden lg:block justify-between">
      <img src="/assets/images/shop/lefts.png" className='relative left-50 bottom-5 w-9 h-15 w-15   ' alt="" />


        <img
          src="/assets/images/hero.png"
          className=" relative bottom-25 right-5  h-70 max-w-max"
          alt=""
        />
      </div>

      <div className="col-span-12 lg:col-span-8  h-[500px] w-full">
      <h1 className="text-center font-semibold text-2xl lg:text-3xl sm: text-xl">
  Empowering Businesses,
</h1>

<h1 className="text-center text-amber-500 font-bold lg:text-5xl font-medium   sm: text-3xl font-medium ">
  Elevating Commerce
</h1>


        <p className="text-center font-sans   mt-7  text-gray-500 sm:text-md tracking-wide lg:text-xl">
          A comprehensive e-commerce platform tailored for small and
          medium-sized <br />
          businesses in Saudi Arabia, offering seamless solutions for fashion
          and <br />
          digital products.{" "}
        </p>
        
        <div className="sm:col-end-3 hidden lg:block absolute right-75  ">
        <img src="/assets/images/shop/hand.png" className='relative bottom-30 left-17 h-20' alt="" />

        </div>
        <div>
          
        <span className="flex flex-col sm:flex-row gap-6 mt-9 justify-center items-center">
  <button className="bg-blue-600 rounded-full py-3 px-18 lg:px-6 text-white font-semibold lg:w-45 sm:w-60 ">
    Shop Now!
  </button>

  <button className="border border-gray-400 rounded-full py-2 px-6 flex items-center justify-center text-lg w-60 sm:w-44">
    See More
    <ArrowRightIcon size={22} className="ml-2" />
  </button>
</span>

        </div>

        <div className="flex flex-wrap items-center justify-center mt-5 gap-4">

  <div className="flex items-center">
    <img
      src="/assets/images/circle.png"
      alt=""
      className="w-6 h-6 z-40"
    />
    <img
      src="/assets/images/circle.png"
      alt=""
      className="w-6 h-6 -ml-2 z-30"
    />
    <img
      src="/assets/images/circle.png"
      alt=""
      className="w-6 h-6 -ml-2 z-20"
    />
    <img
      src="/assets/images/circle.png"
      alt=""
      className="w-6 h-6 -ml-2 z-10"
    />
    <img
      src="/assets/images/circle.png"
      alt=""
      className="w-6 h-6 -ml-2 z-0"
    />
  </div>


  <div className="flex items-center gap-1">
    <h3 className="text-lg text-gray-500">4.9</h3>
    <Star className="h-4 w-4 text-orange-300 fill-current" />
    <Star className="h-4 w-4 text-orange-300 fill-current" />
    <Star className="h-4 w-4 text-orange-300 fill-current" />
    <Star className="h-4 w-4 text-orange-300 fill-current" />
    <Star className="h-4 w-4 text-orange-300 fill-current" />

  </div>


  <p className="text-sm text-gray-500">(1.9k Reviews)</p>
</div>

      </div>

      <div className="col-span-2 h-[500px] hidden lg:block">
        <img
          src="/assets/images/hero1.png"
          className="h-50  w-200  relative bottom-15 "
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
