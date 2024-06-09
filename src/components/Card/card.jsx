import React from "react";
import { Link } from "react-router-dom";
const Card = ({ key, hrefLink, img, text, textSize }) => {
  return (
    <div className="shadow-lg">
      <div className="relative">
        <a
          href={hrefLink}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500"
        >
          <img className="" src={img} alt="Sunset in the mountains" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>

        <Link to="#">
          <div className=" absolute bottom-0 right-0 bg-red-500 px-2 text-white flex flex-col items-center justify-center mt-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {text && (
              <span className={`font-bold whitespace-nowrap ${textSize}`}>
                {text}
              </span>
            )}
          </div>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
