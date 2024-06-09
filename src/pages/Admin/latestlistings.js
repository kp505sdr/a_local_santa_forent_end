import React, { useEffect, useState } from "react";
import AdminTable from "../../components/Table/admintable";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";

const Latestlings = () => {
  const [allListing,setAllListing]=useState()
  useEffect(() => {
    getAllListingData();
  }, []);

  const getAllListingData = async () => {
    try {
      const res = await axios.get( `${process.env.REACT_APP_API}/api/v1/job/get`);
      setAllListing(res?.data)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("listing",allListing)
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <AdminTable />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Latestlings;
