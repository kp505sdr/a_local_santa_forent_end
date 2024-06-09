import React from "react";
import Navbar from "../Navbars/Navbar";
import { Helmet } from "react-helmet";

const Layout1 = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Navbar />
      <Helmet>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      {children}
      <div className="w-full">
        <div className="w-full z-50 fixed bottom-0 sm:bottom-0 bg-[#153039] px-4 mx-auto flex items-center justify-center">
          <div className="flex flex-col-reverse justify-center py-5  border-t lg:flex-row">
            <p className="text-sm text-gray-300 text-center">
              © Copyright 2024 Lorem Inc. All rights reserved.
            </p>
            {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};
Layout1.defaultProps = {
  title: "",
  description: "",
  keywords: "",
};

export default Layout1;
