import React from "react";
import {  ChevronDown  } from "lucide-react";


function AccountEditForm() {
  return (
    <div className="max-w-3xl  mx-auto p-6 mt-8 px-5">
      <div className="border border-gray-300 rounded-md max-w-3xl mb-4 px-10 p-3 font-medium flex items-center justify-between">
  <span>1.</span>
  <span className="ml-4  text-md  flex-1">Edit your account information</span>
  <ChevronDown size={20} className="lg: relative left-6" />
</div>

      <div className="bg-white rounded-md border border-gray-300  max-w-3xl p-6 space-y-6">
     
     
        <div className="px-5">
          <h2 className="text-xl font-semibold">My Account Information</h2>
          <p className="text-sm text-gray-500">Your Personal Details</p>
        </div>

        <div className="flex flex-col items-center  ">
          <div className="relative w-20 h-20 ">
            <div className="bg-blue-100 text-blue-600 rounded-full w-full h-full flex items-center justify-center text-3xl">
              
              <img src="/assets/images/Frame.png" alt="" />
            </div>
            <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <button className="mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded">Upload</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input className="w-full border border-gray-200 rounded px-3 py-2" defaultValue="Elana" />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="Duffy" />
          </div>
        </div>

        <div className="px-5"> 
          <label className="block text-sm font-medium">Email Address</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="canyobg@mailinator.com" />
        </div>

        <div className="px-5">
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Date Of Birth</label>
            <input placeholder="dd-mm-yyyy" type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>

        <div className="pt-4 px-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded lg:relative left-10/12 rounded-full px-8" type="submit" >Update</button>
        </div>
      </div>
    </div>
  );
}

export default AccountEditForm;
