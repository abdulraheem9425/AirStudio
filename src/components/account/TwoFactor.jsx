import React from "react";
import { ChevronDown } from "lucide-react";

function TwoFactor() {
  return (
    <div className="grid grid-cols-1 items-start max-w-3xl shadow-xl  lg:w-190   mx-auto  space-y-4 mt-10 mb-10 ">
      
      <div className="flex items-center shadow-sm p-4 rounded- ">
        <span className="text-md font-semibold">2.</span>
        <span className="ml-4 flex-1 text-md font-medium">Two Factor</span>
        <ChevronDown size={20} />
      </div>

      <div className="p-4 rounded-md shadow-sm bg-white w-full">
        <span className="text-base font-medium">Select available Method</span>
      </div>

      <div className="shadow-sm rounded-md p-6 bg-white w-full text-center">
        <button className="bg-blue-600 text-white px-20 py-1 rounded-full font-semibold flex">
          @ Enable Two Factor <br /> Authentication
        </button>
      </div>
      
    </div>
  );
}

export default TwoFactor;
