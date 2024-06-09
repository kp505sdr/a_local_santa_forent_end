import React, { useEffect, useState } from "react";
import CardStats from "../Card/cardstart";
import { Link } from "react-router-dom";

import Listings from "../../assets/icon/Listings -  alocalsanta.com.png";
import Wishist from "../../assets/icon/wishlist-64.png";

import pending from "../../assets/icon/pending-48.png";

import featured from "../../assets/icon/feature-48.png";
import axios from "axios";

export default function UserHeaderStats() {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token=userdata?.token
  let admin=userdata?.user?.isAdmin

  const [jobData,setJobData]=useState()
  const [pendingData,setPendingData]=useState()
  const [blogData,setblogData]=useState()
  const [loader,setloader]=useState(false)

  useEffect(() => {
    setloader(true)
    getAllJobData();
    getAllBlogData()
  }, [token]);

  const getAllJobData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobData(res?.data)
     
     const pendingJobs=res?.data.filter(item => item?.status=="pending")
    setPendingData(pendingJobs)
    setloader(false)
    } catch (error) {
      console.error("Error fetching user data:", error);
      setloader(false)
     
    }}


    // --------------blog--api-----------------------------
    const getAllBlogData = async () => {
      setloader(true)
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/getall-selfblog`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setblogData(res?.data);
        setloader(false)
      } catch (error) {
        console.error("Error fetching user data:", error);
        setloader(false)
      }

    };


  
  return (
    <>
      {/* Header */}
      <div className="relative md:py-10">
        <div className="md:px-5 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-20 md:gap-10">
              <Link to="/my-listing">
                <div className="w-full">
                  <CardStats
                    statSubtitle="Total Listings"
                    statTitle={loader?(<span className="text-xs text-blue-500">Loaging..</span>):jobData?.length}
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    image={Listings}
                    statIconColor="bg-orange-500"
                  />
                </div>
              </Link>
              <Link to="/user-bloglist">
                <div className="w-full">
                  <CardStats
                    statSubtitle="My Blogs"
                    statTitle={loader?(<span className="text-xs text-blue-500">Loaging..</span>):blogData?.length}
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    image={featured}
                    statIconColor="bg-green-500"
                  />
                </div>
              </Link>
              <Link to="/pending-userlisting">
                <div className="w-full">
                  <CardStats
                    statSubtitle="Pending"
                    statTitle={loader?(<span className="text-xs text-blue-500">Loaging..</span>):pendingData?.length}
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    image={pending}
                    statIconColor="bg-green-500"
                  />
                </div>
              </Link>
              <Link to="/profile-details">
                <div className="w-full">
                  <CardStats
                    statSubtitle="Profile Details"
                    statTitle={<span className="text-sm text-blue-500">{admin?"Admin":"User"}</span>}
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    image={Wishist}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
