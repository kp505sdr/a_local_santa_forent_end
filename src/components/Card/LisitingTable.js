import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LisitingTable = ({
  titile,
  buttonText,
  color,
  children,
  viewmore,
  itm,
}) => {
  const handle = async () => {};

  return (
    <div className="shadow-md shadow-teal-200 mx-2 border-slate-900 relative">
      <div className="flex bg-gray-200 justify-between items-center py-3 mb-3 px-3 ">
        <div className="sm:mx-auto ">
          <h2 className="text-black sm:text-xl md:text-2xl font-semibold pb-2 sm:pb-0">
            {titile}
          </h2>
        </div>
        {buttonText && (
          <div
            className={`flex justify-center items-center rounded-md ${color}`}
          >
            <button className="inline-flex items-center justify-center py-1.5 px-3 rounded-md tracking-wide text-white text-xs sm:text-sm font-semibold">
              {/* <Link to={itm?.hrefLink ? itm?.hrefLink : "/business-form"}> */}

              <Link to="/business-form">{buttonText}</Link>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col">{children}</div>

      {viewmore}
    </div>
  );
};

export default LisitingTable;
