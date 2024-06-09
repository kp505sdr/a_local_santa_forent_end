import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Latestuser from "./Latestusers";
import dateFormat from "dateformat";
import axios from "axios";
const AdminTable = ({ allListing, handleDelete }) => {


  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let navigate = useNavigate();
  var token = userdata?.token;
  var localEmail = userdata?.user?.email;
  var isAdmin=userdata?.user.isAdmin
 

  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10; // Adjust this value as needed

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = allListing?.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // --------------------------------------------------
  const path = useLocation();
      



  return (
    <>
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
          <div className="flex justify-between items-center">
            <div className="">
              {path.pathname === "/listing"
                ? "All Listings"
                : "Latest Listings"}
            </div>
            <div className="flex gap-x-2">
              <Link
                to="/active-listing"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-green-400 hover:bg-green-500  rounded-sm shadow-2xl"
              >
                Active
              </Link>
              <Link
                to="/pending-listing"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-orange-400 hover:bg-orange-500  rounded-sm shadow-2xl"
              >
                Pending
              </Link>
              <Link
                to="/inactive-listing"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-red-400 hover:bg-red-500  rounded-sm shadow-2xl"
              >
                InActive
              </Link>
              <Link
                to="/business-form"
                className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-blue-400 hover:bg-lue-500  rounded-sm shadow-2xl"
              >
                Post New Listings
              </Link>
              {path.pathname === "/listing" ? (
                ""
              ) : (
                <Link
                  to="/listing"
                  className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-violet-500 hover:bg-violet-400 rounded-sm shadow-2xl"
                >
                  View All Listings
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <table className="">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  
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
              {path.pathname === "/admin" &&
                currentListings?.map((res, i) =>
                  i < 5 ? (
                    <tr key={i} className="border-b border-gray-500 ">
                      <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      {res?._id}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      <span className="text-red-600 mr-4 text-xs rounded-xs"> {res?.newAds?"New":""}</span>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                   {res?.title}
                      </td>
                      <td
                        className={`px-6 whitespace-nowrap text-blue-900 ${
                          res.status == "active"
                            ? "text-green-900"
                            : "text-red-900"
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
                          <span className="text-blue-600 font-semibold">
                            Click
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ) : null
                )}

              {path.pathname === "/listing"
                ? currentListings?.map((res, i) => (
                    <tr key={i} className="border-b border-gray-500 ">
                        <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      {res?._id}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      <span className="text-red-600 mr-4 text-xs rounded-xs"> {res?.newAds?"New":""}</span>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                        {res?.title}
                      </td>
                      <td
                        className={`px-6 whitespace-nowrap text-blue-900 ${
                          res.status == "active"
                            ? "text-green-900"
                            : "text-red-900"
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
                          <span className="text-blue-600 font-semibold">
                            Click
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))
                : ""}
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
                className={`px-3 py-1 border border-gray-400 text-gray-700 ${
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
                  className={`px-3 py-1 border border-gray-400 text-gray-700 ${
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
                className={`px-3 py-1 border border-gray-400 text-gray-700 ${
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
    </>
  );
};

export default AdminTable;
