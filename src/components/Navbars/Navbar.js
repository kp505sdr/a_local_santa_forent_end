/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

import IndexDropdown from "../Dropdowns/IndexDropdown";
import TopHeader from "../Top header/index";
import BottomHeader from "../Top header/Bottomheader";

const desktopnav = [
  {
    id: 1,
    name: "Local Rentals",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 2,
    name: "Buy - Sell",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 3,
    name: "Training",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 4,
    name: "Business",
    submenu: false,
  },

  {
    id: 5,
    name: "Events",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 6,
    name: "Health",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 7,
    name: "Places",
    submenu: true,
    hrefLink: "#!",
  },
  {
    id: 9,
    name: "Blog",
    submenu: true,
    hrefLink: "#!",
  },
  ,
  { id: 10, name: "About", submenu: true, hrefLink: "/about-us" },
  { id: 11, name: "Contact", submenu: true, hrefLink: "/contact-us" },
];

const mobilenav = [
  {
    id: 1,
    name: "Local Rentals",
    submenu: true,
    icon: "text-yellow-700 fas fa-building mr-2",
    hrefLink: "/local-rentals",
  },
  {
    id: 2,
    name: "Local Business Ads",
    icon: " fas fa-chart-line mr-2",
    hrefLink: "/local-business-ads",
    submenu: false,

    // sublinks: [
    //   {
    //     id: 1,
    //     Head: "hindi",
    //     sublink:''
    //   },

    // ],
  },
  {
    id: 3,
    name: "Buy - Sell",
    submenu: true,
    icon: "text-teal-700 fa fa-dollar mr-2",

    hrefLink: "/buy-sell",
  },
  {
    id: 4,
    name: "Local Talks",
    icon: "text-cyan-900 far fa-comment-dots mr-2",
    submenu: false,
    hrefLink: "/local-talks",
  },

  {
    id: 5,
    name: "DIY, Hobby & Training",
    submenu: true,
    icon: " 	fas fa-chalkboard-teacher mr-2",

    hrefLink: "/job-div",
  },
  {
    id: 6,
    name: "Local Events & Movies",
    submenu: true,
    icon: "text-yellow-700 fa fa-film mr-2",

    hrefLink: "/local-events-moives",
  },
  {
    id: 7,
    name: "Health and Wellness",
    submenu: true,
    icon: "text-red-600 fas fa-heartbeat mr-2",

    hrefLink: "/health-and-wellness",
    sublinks: [
      {
        id: 1,
        Head: "Autos",
        // sublink: ''
      },
    ],
  },
  {
    id: 9,
    submenu: true,
    hrefLink: "#!",

    name: "Places To Visit Locally",
    icon: "text-green-700 fas fa-map-marked-alt mr-2",
  },
  {
    id: 10,
    name: "Local Blog Post",
    hrefLink: "/local-blog-post",
    icon: " fab fa-blogger-b mr-2",

    submenu: false,
    sublinks: [],
  },
  {
    id: 11,
    name: "Entrepreneurial and Local Business Listing",
    hrefLink: "/entrepreneurial-local-business",
    icon: "text-pink-800 fas fa-sitemap mr-2",

    submenu: false,
    sublinks: [],
  },
  {
    id: 12,
    Other_Tools: "Usefull Tools",
    OtherTools: [
      {
        id: 1,
        name: "Free Video Downloader",
        hrefLink: "#!",
        icon: "text-green-600 fa fa-download",
      },
      {
        id: 2,
        name: "Free Image To Text Converter",
        hrefLink: "#!",
        icon: "text-orange-700 fa fa-exchange",
      },
    ],
  },
];
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg bg-white shadow ">
        <TopHeader />
        <div className="w-11/12 mx-auto flex flex-wrap items-center justify-between">
          {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start "> */}
          <div className="w-full relative flex justify-between">
            <div className="">
              <Link
                to="/"
                // className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
              >
                <img
                  src={Logo}
                  alt="logo"
                  className="w-1/2 md:w-11/12 max-h-28 sm:max-h-20 p-1"
                />
                {/* <h2 className="text-3xl md:text-4xl py-3">Logo</h2> */}
              </Link>
            </div>

            {/* search box  */}

            <div className="w-10/12 sm:w-7/12 flex items-center justify-center">
              <form className="bg-[#f5f7fb] flex justify-between px-2 w-full h-10 items-center rounded-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Buy - Sell | Search | Advertise Locally"
                    className="w-full px-3 rounded-l border-transparent focus:border-transparent focus:ring-0 border-none text-xs sm:text-sm bg-transparent text-black"
                  />
                </div>

                <div className="bg-sky-500 hover:bg-sky-400 flex justify-center items-center rounded-full w-8 h-7">
                  <button
                    type="submit"
                    className="whitespace-nowrap text-white rounded-md "
                  >
                    <i className="fa fa-search text-xs sm:text-sm"></i>
                  </button>
                </div>
              </form>
            </div>
            {/* end */}
            <button
              className="cursor-pointer text-xl md:text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <i className="fa fa-close"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={
          "flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none w-full " +
          (navbarOpen ? " block" : " hidden")
        }
        // id="example-navbar-warning"
      >
        <div className="flex gap-x-3 sm:gap-x-0 shadow-2xl px-2 py-2 w-11/12 fixed top-20 sm:top-32 z-50 bg-[#f5f7fb]">
          <ol className="flex flex-col list-none mx-3 my-3 sm:my-0">
            <h6 className="font-semibold text-gray-700 text-base">
              All Services
            </h6>
            {mobilenav.map((link, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center hover:text-blueGray-500 text-blueGray-700 lg:py-2 my-1 text-xs font-normal"
                >
                  <i className={`${link.icon} sm:text-xl`}></i>

                  {/* <div className="hover:text-blueGray-500 text-blueGray-700 py-0.5 lg:py-2 flex items-center text-xs uppercase font-normal shadow-md p-1 m-1 shadow-teal-400"> */}
                  <IndexDropdown
                    headLink={link.name}
                    hrefLink={link.hrefLink}
                    subLinkText={link.sublinks}
                  />
                  {/* </div> */}
                </li>
              );
            })}
          </ol>

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto my-3 sm:my-0">
            {mobilenav.map((link, i) => (
              <div key={i}>
                <h6 className="font-semibold text-gray-700 ">
                  {link.Other_Tools}
                </h6>
                {link?.OtherTools && Array.isArray(link.OtherTools) && (
                  <ul>
                    {link.OtherTools.map((itm, j) => (
                      <li key={j} className="flex items-center">
                        <i className={`${itm.icon} mr-2 sm:text-xl`}></i>
                        <Link
                          to={itm.hrefLink}
                          className="flex items-center hover:text-blueGray-500 text-blue-500"
                        >
                          <span className="text-xs sm:text-sm mt-1">
                            {" "}
                            {itm.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* <ul className=" hidden lg:flex flex-col lg:flex-row list-none lg:ml-auto my-3 sm:my-0">
              {desktopnav.map((link, i) => {
                return (
                  <li key={i} className="flex items-center">
                    <div className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 lg:py-2 flex items-center text-xs font-normal">
                      <IndexDropdown
                        headLink={link.name}
                        hrefLink={link.hrefLink}
                        subLinkText={link.sublinks}
                      />
                    </div>
                  </li>
                );
              })}
            </ul> */}
      </div>
    </>
  );
}
