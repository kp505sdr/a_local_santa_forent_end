import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Latestuser from "./Latestusers";
import dateFormat from "dateformat";
import AdminLayout from "../Dashboard/Layout/adminlayout";
import axios from "axios";
const ActiveAdminTable = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [allListing, setAllListing] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    getAllListingData();
  }, []);

  const getAllListingData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );

      const activeData = res.data.filter((item) => item.status === "active");
      setAllListing(activeData);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };

  //-----------pagination-------start------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10; // Adjust this value as needed

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = allListing?.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // --------------end------------------------------------

  const path = useLocation();
  return (
    <AdminLayout>
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
          <div className="flex justify-between items-center">
            <div>
              Active Listing{" "}
              <span className="text-green-400 p-1">{allListing?.length}</span>
            </div>
            <div>
              <Link
                to="/pending-listing"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-orange-400 hover:bg-orange-500  rounded-sm shadow-2xl"
              >
                Pending
              </Link>
              <Link
                to="/inactive-listing"
                className="inline-flex items-center mx-2 justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-red-400 hover:bg-red-500  rounded-sm shadow-2xl"
              >
                InActive
              </Link>
              <Link
                to="/business-form"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-blue-400 hover:bg-lue-500  rounded-sm shadow-2xl"
              >
                Post New Listings
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <table className="">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Views
                </th>

                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  SubCategory
                </th>

                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Subscrption
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <p className="text-blue-500 font-semibold">
                {loader ? "Loading..." : ""}
              </p>
              {currentListings?.map((res, i) => (
                <tr key={i} className="border-b border-gray-500 ">
                  <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                    {res?._id}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                    {res?.title}
                  </td>
                  <td
                    className={`px-6 whitespace-nowrap text-blue-900 ${
                      res.status == "active" ? "text-green-900" : "text-red-900"
                    } border-gray-500 text-sm leading-5`}
                  >
                    {res?.status}
                  </td>
                  <td
                    className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                  >
                    {res?.views}
                  </td>
                  <td
                    className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                  >
                    {res?.category}
                  </td>
                  <td
                    className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                  >
                    {res?.city}
                  </td>
                  <td
                    className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                  >
                    {res?.subCategory}
                  </td>

                  <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-sm"
                      />
                      <span className="relative text-xs">
                        {res?.subscrption}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 whitespace-nowrap text-green-900 border-gray-500 text-sm leading-5">
                    {dateFormat(res?.createdAt, " mmmm d , yyyy")}
                  </td>
                  <td className="px-6 whitespace-nowrap text-red-900 border-gray-500 text-sm leading-5">
                    {dateFormat(res?.expDate, " mmmm d , yyyy")}
                  </td>
                  <td className="px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5 cursor-pointer hover:bg-blue-100 ">
                    <Link to={`/listing-ads-update/${res?._id}`}>
                      <span className="text-blue-600 font-semibold">Click</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul className="pagination mt-4">
        {allListing && allListing.length > 0 && (
          <div className="flex justify-center">
            {/* Previous button */}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-1 mx-2 ${
                  currentPage === 1 ? "bg-gray-200" : " text-blue-500 "
                }`}
              >
                Previous
              </button>
            </li>

            {/* Pagination numbers */}
            {Array.from({
              length: Math.ceil(allListing.length / listingsPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`p-1 px-2 ${
                    index + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next button */}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(allListing.length / listingsPerPage)
                }
                className={`p-1 mx-2 ${
                  currentPage === Math.ceil(allListing.length / listingsPerPage)
                    ? "bg-gray-200"
                    : " text-blue-500"
                }`}
              >
                Next
              </button>
            </li>
          </div>
        )}
      </ul>
    </AdminLayout>
  );
};

export default ActiveAdminTable;
