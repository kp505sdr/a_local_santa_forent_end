import React, { useEffect, useState } from "react";

import Sidebar from "../Sidebar";

import axios from "axios";
import { admin, user } from "../Sidebar/data";
import Breadcrumb from "../Breadcrumb";

export default function AdminLayout({ children }) {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token=userdata?.token
  const [userData,setUserData]=useState()
  const getUserData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/getsingle/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(res.data)
     
    } catch (error) {
      console.error("Error fetching user data:", error);
     
    }}
  useEffect(() => {
    getUserData();
  }, [token]);
  const cdt = admin ? 1 : "";
  return (
    <>
      <Sidebar menu={admin} cdt={cdt} userData={userData}/>
      <div className="relative md:ml-64 bg-blueGray-100 h-screen overflow-y-auto">
        <div className="px-4 md:px-10 mx-auto w-full pt-2">
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
