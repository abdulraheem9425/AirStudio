import React from "react";
import { ChevronDown } from "lucide-react";

function TwoFactor() {
  return (
    <div className="grid grid-cols-1 items-start max-w-3xl border border-gray-300  rounded-md lg:w-180   mx-auto  space-y-4 mt-10 mb-10 ">
      
      <div className="flex items-center shadow-sm p-4  ">
        <span className="text-md font-semibold">2.</span>
        <span className="ml-4 flex-1 text-md font-medium">Two Factor</span>
        <ChevronDown size={20} />
      </div>

      <div className="p-4 rounded-md shadow-sm bg-white w-full">
        <span className="text-base font-medium">Select available Method</span>
      </div>

      <div className=" rounded-md p-6  w-full text-center">
        <button className="bg-blue-600 text-white px-25 py-1 rounded-full  flex">
          @ Enable Two Factor <br /> Authentication
        </button>
      </div>
      
    </div>
  );
}

export default TwoFactor;
