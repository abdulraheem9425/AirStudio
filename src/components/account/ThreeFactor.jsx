import React from "react";
import { ChevronDown } from "lucide-react";

function ThreeFactor() {
  return (
    <div className="grid grid-cols-1 items-start max-w-3xl border border-gray-300  lg:w-180 rounded-md   mx-auto  space-y-4 mt-10 mb-10 ">
      
      <div className="flex items-center border border-gray-100 p-4 rounded-md bg-white w-full">
        <span className="ml-4 flex-1 text-md font-medium">All Address</span>
      </div>

      <div className="p-4 rounded-md border border-gray-100 bg-white w-full">
        <span className="text-base font-medium ml-3">Add new Adress</span>
      </div>
 <div className="flex items-center  border border-gray-100 mt-2  p-4 rounded-md bg-white w-full">
        <span className="text-lg font-semibold">3.</span>
        <span className="ml-4 flex-1 text-md font-medium">Manage Address</span>
        <ChevronDown size={20} />
      </div>

      
    </div>
  );
}

export default ThreeFactor;
