import React from "react";
import { Link } from "react-router-dom";

const LikeAndComment = ({ hrefLink, title, likeNo, CommentNo, ViewNo }) => {
  return (
    <div className="px-2 py-1 border-b mb-1 shadow-sm shadow-teal-200 hover:shadow-md hover:shadow-teal-300">
      <div className="">
        <Link to={hrefLink}>
          <p className="text-sm sm:text-base font-semibold hover:text-gray-600">
            {title}
          </p>
        </Link>
      </div>
      <div className="text-xs font-normal ">
        <div className="flex gap-x-1">
          <p className="text-xs">
            <span className="">Like : </span>
            <span className="">{likeNo}</span>
          </p>
          <p className="text-xs">
            | Comment : <span className=""> {CommentNo}</span>
          </p>
          <p className="text-xs">
            | View : <span className=""> {ViewNo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeAndComment;
