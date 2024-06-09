import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Spinner = ({ path = "login", text }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {text ? (
        <div>
          <h2 className="font-primary">
            Redirect to you in <span>{count} </span>
            second
          </h2>
        </div>
      ) : (
        ""
      )}
      <div>
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    </div>
  );
};

export default Spinner;
