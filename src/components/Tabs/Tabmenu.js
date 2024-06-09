import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tabmenu = ({
  ListingData,
  loading,
  Popular,
  handleReadMark,
  handleDeleteMark,
}) => {
  const navigative = useNavigate();
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className=" border-gray-200 dark:border-gray-700">
        <ul className="flex gap-2 justify-around" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={`rounded cursor-pointer text-sm  ${
                activeTab === "1" ? " text-green-500" : "text-black"
              }`}
              onClick={() => handleTabClick("1")}
              type="button"
              role="tab"
              aria-controls="1"
              aria-selected={activeTab === "1"}
            >
              Latest Listing
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`rounded cursor-pointer text-sm  ${
                activeTab === "2" ? " text-green-500" : "text-black"
              }`}
              onClick={() => handleTabClick("2")}
              type="button"
              role="tab"
              aria-controls="markread"
              aria-selected={activeTab === "2"}
            >
              Popular Listing
            </button>
          </li>
        </ul>
      </div>

      <div id="default-tab-content" className="w-full px-2">
        <p className="text-blue-600 font-semibold">
          {loading ? "Loading..." : ""}
        </p>
        {ListingData?.map((itm, i) =>
          i < 5 ? (
            <Link
              to={`/reviews-and-listing/${itm._id}`}
              key={i}
              className={`w-full flex items-center justify-between border-b text-sm sm:text-xl py-2 my-2 shadow-sm shadow-teal-200 px-1  hover:shadow-md hover:shadow-teal-300 ${
                activeTab === "1" ? "" : "hidden"
              }`}
              id="1"
              role="tabpanel"
            >
              <p className="text-sm sm:text-base font-semibold hover:text-gray-600 w-full">
                {itm.title?.substring(0, 40)}
              </p>
              <div className="flex w-full justify-end">
                <div className="flex gap-x-2  items-center justify-end rounded-md w-9/12 sm:w-1/2">
                  <p className="font-normal text-xs">{itm?.views}</p>
                  <p>
                    <i
                      className="fa fa-eye mx-1 text-blue-600"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )
        )}

        {Popular?.map((itm, i) =>
          i < 5 ? (
            <Link
              to={`/reviews-and-listing/${itm._id}`}
              key={i}
              className={`bg-gray-100 w-full flex items-center justify-between border-b text-sm sm:text-xl py-2 my-2 shadow-sm shadow-teal-200 px-1  hover:shadow-md hover:shadow-teal-300 ${
                activeTab === "2" ? "" : "hidden"
              }`}
              id="2"
              role="tabpanel"
            >
              <p className="text-sm sm:text-base font-semibold hover:text-gray-600 w-full">
                {itm.title?.substring(0, 40)}
              </p>

              <div className="flex w-full justify-end">
                <div className="flex gap-x-2  items-center justify-end rounded-md w-9/12 sm:w-1/2">
                  <p className="font-normal text-xs">{itm?.views}</p>
                  <p>
                    <i
                      className="fa fa-eye mx-1 text-blue-600"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            ""
          )
        )}
      </div>

      {/* <div id="default-tab-content" className="w-full px-2">
        {elem?.map((itm, i) => {
          return (
            <div
              key={i}
              className={`flex justify-between items-center border-b text-sm sm:text-xl py-2 my-2 ${
                activeTab === "1" ? "" : "hidden"
              }`}
              id="1"
              role="tabpanel"
            >
              <Link to={itm.hrefLink}>
                <p className="text-sm sm:text-base font-semibold hover:text-gray-600">
                  {itm.title.substring(0, 40)}
                </p>
              </Link>
              <div className="text-xs">
                <p className="font-normal">{itm.publish}</p>
              </div>
              <div className="bg-teal-500  flex justify-center items-center rounded-md">
                <button className="inline-flex items-center justify-center px-3 py-1.5 font-semibold tracking-wide text-white text-sm">
                  {itm.btnText}
                </button>
              </div>
            </div>
          );
        })}

        {elem?.map((itm, i) => {
          return (
            <div
              key={i}
              className={`flex justify-between items-center border-b text-sm sm:text-xl py-2 my-2${
                activeTab === "2" ? "" : "hidden"
              }`}
              id="2"
              role="tabpanel"
            >
              <Link to={itm.hrefLink}>
                <p className="text-sm sm:text-base font-semibold hover:text-gray-600">
                  {itm.title.substring(0, 40)}
                </p>
              </Link>
              <div className="text-xs">
                <p className="font-normal">{itm.publish}</p>
              </div>
              <div className="bg-teal-500  flex justify-center items-center rounded-md">
                <button className="inline-flex items-center justify-center px-3 py-1.5 font-semibold tracking-wide text-white text-sm">
                  {itm.btnText}
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Tabmenu;
