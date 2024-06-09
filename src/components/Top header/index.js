import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let user=userdata?.user?.isAdmin

  return (
    <div className="bg-teal-400 flex justify-start text-sm py-2 w-full">
      <div className=" w-full px-1 sm:w-11/12 mx-auto flex items-center justify-between">
        {" "}
        <Link
          to="!#"
          className=" text-xs sm:text-sm md:text-base py-0.5 px-3  text-white"
        >
          <i className="fas fa-map-marker-alt mr-1"></i>{" "}
          <span className="">Dallas</span>
        </Link>
        <div className="flex justify-end gap-x-2.5 sm:gap-x-5 items-center">
          {userInfo ? (
            <Link
              to={`${user ? "/admin" : "/user-dashboard"}`}
              className="flex items-center justify-center"
            >

              {<img src={userdata?.user?.profilepic?(userdata?.user?.profilepic):"https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"} alt="profile" className="h-10 w-10 rounded-full" />}
              {/* {userdata?.profilepic ? (
                <img
                  src={userdata?.user?.profilepic}
                  alt="avtar"
                  className="w-5 h-5 rounded-full"
                />
              ) : (
                <img
                  src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                  alt="avtar"
                  className="w-8 h-8 rounded-full"
                />
              )} */}
              <p className=" text-xs sm:text-sm md:text-base py-0.5 px-3  text-white">
                {userdata?.name}
              </p>
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className=" text-xs sm:text-sm md:text-base py-0.5 px-3 shadow-md bg-yellow-400 hover:bg-yellow-300 rounded-md"
              >
                <span className="">Login </span>
              </Link>
              <Link
                to="/register"
                className=" text-xs sm:text-sm md:text-base py-0.5 px-3 shadow-md bg-yellow-400 hover:bg-yellow-300 rounded-md"
              >
                <span className="">Register </span>
              </Link>
            </>
          )}

          {/* <Link
            to="#"
            className=" text-xs sm:text-sm md:text-base fon py-0.5 px-3 shadow-md bg-yellow-400 hover:bg-yellow-300 rounded-md"
          >
            <span className="">About </span>
          </Link>
          <Link
            to="#"
            className=" text-xs sm:text-sm md:text-base fon py-0.5 px-3 shadow-md bg-yellow-400 hover:bg-yellow-300 rounded-md"
          >
            <span className="">Contact </span>
          </Link> */}
          <Link
            to="/ads-with-us"
            className="text-xs sm:text-sm md:text-base fon py-0.5 px-3 shadow-md bg-yellow-400 hover:bg-yellow-300 rounded-md"
          >
            <span className="">Ads With us </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
