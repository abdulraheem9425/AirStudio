import React from "react";
import { Eye } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl  shadow-sm rounded-xl p-9 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Username or email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10"
            />
            <div className="absolute top-3 right-3 ">
              <Eye size={20} />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-black ">
              Forgot Password?
            </a>
          </div>
<button className="w-40  sm:w-40 md:w-52 lg:w-50 bg-blue-600 text-white py-2  sm:mr-3 md:ml-6 lg:ml-40 rounded-full">
  Login
</button>

        </form>

        <p className="text-center text-md mt-4">
          Don’t have an account?{" "}
            Signup Now
       
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
