import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statIconName,
  statIconColor,
  image,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded xl:mb-0 shadow-lg hover:shadow hover:shadow-teal-300">
        <div className="flex-auto p-4">
          <div className="w-full flex flex-row gap-x-2">
            <div className="relative w-auto mx-auto ">
              <div
                className={
                  "text-white p-3 text-center flex items-center justify-center w-12 h-12 shadow-lg rounded-full mb-3 sm:mb-0 " +
                  statIconColor
                }
              >
                {statIconName && (
                  <i className={`${statIconName} text-center m-auto`}></i>
                )}
                {image && (
                  <img src={image} alt={image} className="bg-transparent" />
                )}
              </div>
            </div>
            <div className="relative w-full sm:pl-4 max-w-full flex flex-col justify-center items-center">
              <h5 className="text-blueGray-400 font-bold text-xs text-center">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-sm sm:text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
