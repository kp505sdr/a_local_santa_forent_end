import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import logoutIcon from "../../../assets/icon/logout-64.png";

const Sidebar = ({ menu, cdt}) => {
  const userInfo = localStorage.getItem("UserInformation");
  let userdata = JSON.parse(userInfo);
  let admin=userdata?.user?.isAdmin
  let name=userdata?.user?.name
  let profilepic=userdata?.user?.profilepic

  const [collapseShow, setCollapseShow] = useState("hidden");

  const navigative = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    toast.success("logout successfully");
    setTimeout(()=>{
      navigative("/");
    },1000)
    
  };



  return (
    <>
      <ToastContainer />
      <nav
        className={`${
          cdt ? "bg-blue-800" : ""
        } md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-x flex flex-wrap items-center justify-between relative md:w-64 z-10 md:py-4`}
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className={`cursor-pointer ${
              cdt ? "text-white" : ""
            } opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent`}
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold"
            to={`${admin?"/admin-profile-detail":"/profile-details"}`}
            
            // /admin-profile-detail
          >
            <div className="flex items-center gap-x-5 sm:pr-3">
              <div className="md:hidden">
                <i className="far fa-bell text-2xl text-white"></i>
              </div>
              <div className="flex items-center justify-around mr-2 sm:mr-0 border-b w-full">
                <img
                  src={profilepic? profilepic:"https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}
                  alt="profile"
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-full p-2"
                />

                <div className="text-center">
              
                  <h3 className={`text-base mt-2 ${cdt ? "text-white" : ""}`}>
                    {name}
                  </h3>
                  <p className={`-mt-1.5 text-[8px] ${cdt ? "text-white" : ""}`}>
                    Welcome
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Collapse */}
          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow} `}
            style={{ backgroundColor: `${cdt ? "#1e40af" : ""}` }}
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200 bg-transparent">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to={`${admin?"/admin-profile-detail":"/profile-details"}`}
                  >
                    <div className="flex items-center justify-around">
                      <img
                        src={profilepic? profilepic:"https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}
                        alt="user-profile"
                        className="w-12 h-12 rounded-full p-2"
                      />
                     <div className="text-center">
              
              <h3 className={`text-base mt-2 ${cdt ? "text-white" : ""}`}>
                {name}
              </h3>
              <p className={`-mt-1.5 text-[8px] ${cdt ? "text-white" : ""}`}>
                Welcome
              </p>
            </div>
                    </div>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className={`cursor-pointer ${
                      cdt ? "text-white" : ""
                    } opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent`}
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none mx-auto">
              <li className="w-full px-5">
                {menu?.map((d, id) => {
                  return (
                    <NavLink
                      key={id}
                      className={
                        "flex justify-start items-center text-xs py-3 font-bold " +
                        (window.location.href.indexOf(d.link) !== -1
                          ? "text-white bg-orange-400"
                          : `${
                              cdt ? "text-white" : ""
                            } hover:text-white hover:bg-orange-400`)
                      }
                      to={`${d.link}`}
                    >
                      <span className="px-5 flex">
                        {d.icon && (
                          <i
                            className={
                              `${d?.icon} mr-2 text-sm ` +
                              (window.location.href.indexOf(d.link) !== -1
                                ? "opacity-75"
                                : " ")
                            }
                          ></i>
                        )}

                        {d.img && (
                          <img
                            src={d?.img}
                            alt=""
                            className={
                              `${d.icon} mr-2 text-sm w-5 h-5 ` +
                              (window.location.href.indexOf(d.link) !== -1
                                ? "opacity-75"
                                : " ")
                            }
                          />
                        )}

                        {d.heading}
                      </span>
                    </NavLink>
                  );
                })}
              </li>
              <li className="w-full px-5">
                <button
                  onClick={handlelogout}
                  className={`${
                    cdt ? "text-white" : ""
                  } flex px-5 text-xs text-left py-3 font-bold hover:text-white hover:bg-orange-400 w-full `}
                >
                  {/* <i className="fas fa-sign-out-alt  mr-2 text-sm"></i> */}
                  <img
                    src={logoutIcon}
                    alt=""
                    className="mr-2 text-sm w-5 h-5 "
                  />
                  <p>Logout</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
