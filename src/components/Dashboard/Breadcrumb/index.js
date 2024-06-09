import React from "react";

const Breadcrumb = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex justify-start">
      <nav className="text-sm sm:text-base pt-5">
        <button onClick={goBack} className="flex items-center">
          <i className="fa fa-arrow-circle-left"></i>
          <li className="flex items-center pl-2">Back</li>
        </button>
      </nav>
    </div>
  );
};

export default Breadcrumb;
