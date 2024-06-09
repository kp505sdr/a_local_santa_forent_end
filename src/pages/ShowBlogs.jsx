import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const ShowBlogs = ({ res, i }) => {
  return (
    <Link
      to={`/user-blogdetails/${res._id}`}
      key={i}
      className="bg-white shadow-md rounded-md cursor-pointer my-1 "
    >
      <img
        src={
          res?.images[0]
            ? `${process.env.REACT_APP_API}/${res?.images[0].path}`
            : "https://res.cloudinary.com/dkmsgd3ua/image/upload/v1710358388/hym2mguczixkumd5u5vs.webp"
        }
        alt={res?.images[0]}
        className="hover:opacity-80 h-60 md:h-32 w-full"
      />
      <p className="text-xs p-1">
        Posted Date:-{" "}
        <i className="text-gray-600 font-semibold">
          {" "}
          {dateFormat(res?.createdAt, " mmmm dS, yyyy")}
        </i>
      </p>
      <div className="my-3">
        <div className="flex justify-between items-center pb-2 bg-gray-100">
          <p className="bg-gray-100 text-gray-700 ml-1 p-2 font-semibold text-md">
            {res?.title?.length > 15
              ? `${res?.title.substring(0, 15)}....`
              : res?.title}
          </p>
          <div className="flex justify-between items-center">
            <p className="mx-1 text-xs">
              <i className="text-blue-600 font-normal">{res?.name}</i>
            </p>
            <img
              src={
                res?.profilepic
                  ? res?.profilepic
                  : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
              }
              alt="profile pic"
              className="h-10 w-10 rounded-full mt-2 mr-2"
            />
          </div>
        </div>

        <p className="text-sm font-medium text-gray-600">
          {res?.blogsDetails?.length > 100
            ? `${res?.blogsDetails.substring(0, 100)}....`
            : res?.blogsDetails}
        </p>
      </div>
    </Link>
  );
};

export default ShowBlogs;
