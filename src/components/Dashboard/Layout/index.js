import React from "react";

import Sidebar from "../Sidebar";

import Breadcrumb from "../Breadcrumb";
import { admin, user } from "../Sidebar/data";


export default function Layout({ children,userData }) {
 
  return (
    <>
      <Sidebar menu={user} userData={userData} />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen overflow-y-auto">
        {/* <AdminNavbar /> */}
        <div className="px-4 md:px-10 mx-auto w-full pt-2 ">
          <Breadcrumb />
          {children}
          {/* <div className="">
            <h2>Footer</h2>
          </div> */}
        </div>
      </div>
    </>
  );
}
