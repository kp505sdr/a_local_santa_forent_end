import React, { useEffect, useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import Card from "../../components/Dashboard/card";
import MylistingTable from "../../components/Table/mylisting";
import axios from "axios";

const Mylisting = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [myListingData, setMyListingData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // GarbageFun()
    getAllJobData();
  }, [token]);

  const getAllJobData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMyListingData(res?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  // -------------------------garbage-fun---------------------------------
  // const GarbageFun = async () => {
  //   try {
  //     const res = await axios.delete(
  //       `${process.env.REACT_APP_API}/api/v1/grabage-ads`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            {/* <CardLineChart /> */}
            <MylistingTable myListingData={myListingData} />
            <p className="p-2 text-blue-600">{loading ? "Loading..." : ""}</p>
          </div>
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Mylisting;
