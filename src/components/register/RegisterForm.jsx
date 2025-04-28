import React from 'react'
import { ChevronDown } from "lucide-react";

const RegisterForm = () => {
  return (
    <>
            <h2 className='text-center text-blue-700 font-bold text-3xl mb-6 mt-5'>Register</h2>


    <div className='flex flex-col   max-w-2xl  mt-6  mb-20 rounded-sm border  border-gray-300 min-h-screen px-11 sm: mx-auto '>
      <div className='w-full max-w-xl p-10 rounded-lg  md:grid-flow-col '>

        <form className='space-y-5'>
          <div>
            <label className='block text-lg  mb-1'>First Name</label>
            <input type="text" className='w-full border border-gray-300 focus:outline-none py-2 px-3 rounded-md' />
          </div>

          <div>
            <label className='block text-lg  mb-1'>Last Name</label>
            <input type="text" className='w-full border border-gray-300 py-2 px-3 rounded-md' />
          </div>

          <div>
            <label className='block text-lg  mb-1'>Email Address</label>
            <input type="email" className='w-full border border-gray-300 focus:outline-none py-2 px-3 rounded-md' />
          </div>

          <div>
            <label className='block text-lg  mb-1'>Password</label>
            <input type="password" className='w-full border border-gray-300  focus:outline-none py-2 px-3 rounded-md' />
          </div>


          <div className=''>
          <label className='block text-lg  mb-1'>Country</label>

            <select className='w-full p-3 rounded-md border border-gray-300 ' placeholder='Select   '>

            </select>



          </div>
          <label className='block text-lg  mb-1'>Phone Number </label>

          <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md">

            <img
              src="/assets/images/contact/flag.png"
              alt="Flag"
              className="w-6 h-4"
            />
            <ChevronDown className="text-gray-500" />
            <input
              type="text"
              placeholder="+1 (702) 123-4567"
              className="w-full focus:outline-none px-2"
            />
          </div>

          <div className='text-center'>
            <button
              type="submit"
               className="w-40 bg-blue-600 hover:bg-blue-700  text-white py-2 rounded-full font-semibold sm: w-2xl"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )

}

export default RegisterForm;
