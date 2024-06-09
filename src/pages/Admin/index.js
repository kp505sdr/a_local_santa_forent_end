import React, { useEffect, useState } from "react";
import AdminHeaderStats from "../../components/Headers/adminheader";
import AdminTable from "../../components/Table/admintable";
import Latestuser from "../../components/Table/Latestusers";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";
const Admindashboard = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [loader, setLoader] = useState(false);
  const [allListing, setAllListing] = useState();
  const [newListing, setnewListing] = useState();
  const [allBlog, setAllBlog] = useState();
  
  const [allUser, setallUser] = useState();
  useEffect(() => {
    setLoader(true);
    getAllListingData();
    getAllUser();
    getAllBlogsData()
  }, []);

  const getAllListingData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
      setAllListing(res?.data);
      setLoader(false);

      const newData=res?.data?.filter(item => item?.newAds==true)
      setnewListing(newData)
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };

  // -----------------total-user--------------------
  const getAllUser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get/allusers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setallUser(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoader(true);
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/job/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoader(false);
      setAllListing(res?.data);
      console.log("post list =>", res?.data);
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };

  const Loading = () => {
    if (loader) {
      return (
        <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      );
    }
  };


  // --------------------------get--all-blogs--------------------------------------------

  const getAllBlogsData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getall-blogs`
      );
      setAllBlog(res?.data);
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
          <div className="w-full mb-12 xl:mb-0 px-2 sm:px-0">
            <AdminHeaderStats allListing={allListing} allUser={allUser} newListing={newListing} allBlog={allBlog} loader={loader}/>
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col px-0 sm:px-3">
          <div>
            <AdminTable
              allListing={allListing}
              allUser={allUser}
              handleDelete={handleDelete}
            />
            
            {loader ? <Loading />: ""}
          </div>
          <div className="mt-4">
            <Latestuser allUser={allUser} />
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />

            <h2>CardBarChart</h2>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <h2>CardSocialTraffic</h2>
            <CardSocialTraffic />
          </div> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admindashboard;
