import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [apiRes, setApiRes] = useState();
  const [errApiRes, setErrApiRes] = useState();
  const [loader, setloader] = useState(false);

  const forgetPassFun = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/forgetPassword`,
        data
      );
      setApiRes(res);
      setloader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setErrApiRes(error);
      setloader(false);
    }
  };
  const data = {
    email: email,
  };

  const handleSubmit = async (e) => {
    setloader(true);
    e.preventDefault();
    forgetPassFun(data);
    setEmail("");
  };

  return (
    <>
      <div className="m-1 md:w-1/2 md:m-auto shadow-md rounded-md mx-1 md:mt-16 p-4">
        <p className="text-md text-center font-semibold bg-gray-100 p-2 mt-2">
          Verification Link will send in your email
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
            <span className="font-semibold">
              Email <strong className="text-red-500">*</strong>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="organization"
              placeholder="Enter Your Registered Email"
              className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
            />
          </label>

          <p className="text-red-600 text-center p-2 font-semibold">
            {errApiRes?.response?.data?.message}
          </p>
          <p className="text-green-600 text-center p-2 font-semibold">
            {apiRes?.data?.message}
          </p>
          <p className="text-blue-600 text-center p-2 font-semibold">
            {loader ? "Please Wait..." : ""}
          </p>

          <div className="mx-auto flex mt-4 justify-center">
            <button
              type="Submit"
              className="inline-flex items-center justify-center px-3 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md"
            >
              Reset Password
            </button>
            <Link
              to="/login"
              className="inline-flex mx-3 w-36 items-center justify-center px-2 py-1 font-sans font-semibold tracking-wide text-blue-700  rounded-md"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
