import React, { useEffect, useState } from "react";
import AdminTable from "../../components/Table/admintable";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";

const AllListing = () => {
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
      setAllListing(res?.data);

 
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/job/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllListing(res?.data);
      console.log("post list =>", res?.data);
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <AdminTable allListing={allListing} handleDelete={handleDelete} />
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllListing;
