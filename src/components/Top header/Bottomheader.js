import React from "react";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className="bg-[#16b19f] flex justify-start text-sm py-2 text-white w-full">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="text-white flex gap-x-5">
          <div className=" flex gap-x-2">
            <form className="w-full flex items-center gap-2 ">
              <img
                src="https://nris.com/admin_assets/images/flags/us.svg"
                alt="logo"
                className="w-8 h-5"
              />
              <p className="">Home</p>
              <select
                id="countries"
                className="w-1/2 bg-transparent border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-white block p-1.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white"
              >
                <option selected>USA</option>
                <option value="US" className="text-xs sm:text-sm text-gray-700">
                  United States
                </option>
                <option value="CA" className="text-xs sm:text-sm text-gray-700">
                  Canada
                </option>
                <option value="FR" className="text-xs sm:text-sm text-gray-700">
                  France
                </option>
                <option value="DE" className="text-xs sm:text-sm text-gray-700">
                  Germany
                </option>
              </select>
            </form>
          </div>

          <div className="">
            <form className="max-w-sm">
              <img src="" alt="" />
              <select
                id="countries"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white block w-full p-1.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white"
              >
                <option selected>USA</option>
                <option value="US" className="text-xs sm:text-sm text-gray-700">
                  United States
                </option>
                <option value="CA" className="text-xs sm:text-sm text-gray-700">
                  Canada
                </option>
                <option value="FR" className="text-xs sm:text-sm text-gray-700">
                  France
                </option>
                <option value="DE" className="text-xs sm:text-sm text-gray-700">
                  Germany
                </option>
              </select>
            </form>
          </div>
          {/* <div className="hidden md:block bg-[#738684] text-center flex justify-center m-auto items-center px-5 py-1 rounded-md">
            <p className="">You are in Delaware Home</p>
          </div> */}
        </div>

        <div className="">
          <div className="text-lg text-white sm:mt-0 mt-lg-0 flex gap-x-5">
            <Link
              to="login"
              className="text-base font-normal flex items-center gap-x-2"
            >
              <i className="fas fa-lock"></i>
              <span className="hidden md:block">Login </span>
            </Link>
            <Link
              to="register"
              className="text-base font-normal flex items-center gap-x-2"
            >
              <i className="fas fa-pen"></i>
              <span className="hidden md:block">Register </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
