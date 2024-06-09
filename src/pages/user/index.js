import React,{useEffect, useState} from "react";
import Layout from "../../components/Dashboard/Layout";
import HeaderStats from "../../components/Headers";
import UserTable from "../../components/Table/usertable";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Userdashboard = () => {
  let navigate = useNavigate();
  const [recentListingData,setRecentListingData]=useState()
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token=userdata?.token



  useEffect(() => {
 
    if(!userdata?.token){
      navigate("/")
    }
    getAllJobData();
  }, [token]);


// ------------------------------------api---------------------------------------------



const getAllJobData = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRecentListingData(res?.data)


  } catch (error) {
    console.error("Error fetching user data:", error);
   
  }}







  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-col">
          <div className="w-full mb-12 xl:mb-0">
            <HeaderStats/>
          </div>
          {/* <div className="w-full sm:px-4">
            <UserTable />
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Userdashboard;
