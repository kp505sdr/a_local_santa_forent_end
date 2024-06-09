import React from "react";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const EditprofileAdmin = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
            {/* <CardLineChart /> */}

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold uppercase">
                Profile
              </div>
              <form className="py-4 px-6" action method="POST">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="date"
                  >
                    Gender
                  </label>
                  <div className="flex">
                    {" "}
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-125"
                        type="radio"
                        name="sfg"
                      />
                      <div class="title px-2">Male</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-125"
                        type="radio"
                        name="sfg"
                      />
                      <div class="title px-2">female</div>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="social-media"
                  >
                    Social Media
                  </label>
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="facebook"
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="Linkdin"
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="Youtube"
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="X"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="date"
                  >
                    Profile Pic
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                    placeholder="Select a date"
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditprofileAdmin;
