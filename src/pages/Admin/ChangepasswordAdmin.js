import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Layout from "../../components/Dashboard/Layout";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const ChangepasswordAdmin = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            {/* <CardLineChart /> */}

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold">
                Change Password
              </div>
              <form className="py-4 px-6" action method="POST">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="Email"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="Current-password"
                  >
                    Current Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Enter your Current Password"
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
                    placeholder="Enter your New Password"
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
                    placeholder="Enter your Confirm Password"
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ChangepasswordAdmin;
