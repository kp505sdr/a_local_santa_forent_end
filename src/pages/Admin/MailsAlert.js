import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";
import AdminAlertTable from "./AdminAlertTable";



const MailsAlert = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [allListing, setAllListing] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    getAllListingData();
  }, []);

  const getAllListingData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
     
      const newdata=res?.data.filter(item => item?.newAds==true)
      setAllListing(newdata);
  
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };


  
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <AdminAlertTable allListing={allListing}/>
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MailsAlert;
