import React, { useEffect, useState } from "react";
import Latestuser from "../../components/Table/Latestusers";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";

const Allusers = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [allUser, setallUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllUser();
  }, [token]);

  const getAllUser = async () => {
    try {
      setLoader(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get/allusers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setallUser(res?.data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };

  return (
    <AdminLayout>
      <div className="my-5">
        <div className="w-full flex flex-col px-0 sm:px-3">
          <div className="mt-4">
            <Latestuser allUser={allUser} />
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Allusers;
