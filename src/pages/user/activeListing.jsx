
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Dashboard/Layout';
import PendingListingTable from '../../components/Table/PendingListingTable';
import axios from 'axios';
import UserPendingTable from '../../components/Table/UserPendingTable';
import UserActiveTable from '../../components/Table/UserActiveTable';

const ActiveListing = () => {
    const userInfo = localStorage.getItem("UserInformation");
    const userdata = JSON.parse(userInfo);
    let token = userdata?.token;
  
    const [pendingData, setMyPendingData] = useState();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
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
  
        const pendingData=res?.data.filter(item => item.status=="active")
        setMyPendingData(pendingData);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };
    return (
      <Layout>
        <div className="my-5">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {/* <CardLineChart /> */}

              <UserActiveTable pendingData={pendingData} />
              
            </div>
            <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
          </div>
        </div>
      </Layout>
    );
}

export default ActiveListing