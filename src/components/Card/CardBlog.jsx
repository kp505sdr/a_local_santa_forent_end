import React from "react";
import Star from "../UI/start";
import { Link } from "react-router-dom";

const CardBlog = ({ hrefLink, img, title, name, stars, description }) => {
  return (
    <Link to={hrefLink}>
      <div className="rounded-lg border-2 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col">
          <div className="m-auto">
            {img && (
              <img
                alt
                src={img}
                className="size-32 rounded-full object-cover"
              />
            )}
          
          </div>
   
              <p className="text-md mt-3">{name}</p>
     
        </div>
        <p className="mt-4 text-lg font-medium text-gray-900">{title}</p>
        <p className="mt-1 text-sm text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default CardBlog;
