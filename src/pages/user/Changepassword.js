import React, { useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

const Changepassword = () => {
  const [oldPassword, setoldPassword] = useState();
  const [newPassword, setnewPassword] = useState();
  const [cnfNewPass, setcnfNewPass] = useState();

  const [errapiRes, setErrApiRes] = useState();
  const [apiRes, setApiRes] = useState();
  const [loader, setloader] = useState(false);

  // -----------------call---api---------------------------
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const changePassFun = async (changepass) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/changePassword`,
        changepass,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setApiRes(res);
      setloader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setErrApiRes(error);
      setloader(false);
    }
  };
  const changepass = {
    oldPassword,
    newPassword,
  };
  const HandeleSubmit = async (e) => {
    setloader(true);
    e.preventDefault();
    changePassFun(changepass);
    setoldPassword("");
    setnewPassword("");
    setcnfNewPass("");
  };

  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-2">
            {/* <CardLineChart /> */}

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold">
                Change Password
              </div>
              <div className="text-md px-2 text-center ">
                <p className="text-red-600 font-semibold">
                  {errapiRes?.response?.data}
                </p>
                <p className="text-green-600 font-semibold"> {apiRes?.data}</p>
                <p className="text-blue-600 font-semibold">
                  {loader ? "Please Wait..." : ""}
                </p>
              </div>

              <form
                onSubmit={HandeleSubmit}
                className="py-4 px-6"
                action
                method="POST"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="old-password"
                  >
                    Old Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    required
                    placeholder="Enter your Old Password"
                    value={oldPassword}
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="New-Password"
                  >
                    New Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    required
                    placeholder="Enter your New Password"
                    value={newPassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="Confirm-Password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    required
                    placeholder="Enter your Confirm Password"
                    value={cnfNewPass}
                    onChange={(e) => setcnfNewPass(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-around mb-4">
                  <button
                    className="bg-blue-600 text-sm text-white py-2 px-2 rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Password
                  </button>
                  <Link
                    to="/forget-password"
                    className="bg-blue-600 text-sm text-white py-2 px-2 rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Forget Password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Changepassword;
