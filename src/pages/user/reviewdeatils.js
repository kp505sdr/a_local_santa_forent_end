import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Layout from "../../components/Dashboard/Layout";
import ReviewsTable from "../../components/Table/Reviews";
import Reviewcard from "../../components/Dashboard/Review";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout1 from "../../components/Layout/Layout1";

const Reviewsdetails = () => {

  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token=userdata?.token
  const [getReviwes,setGetReviwes]=useState()
  let {id}=useParams()
    
    useEffect(() => {
      getAllJobData();
    }, []);
  
  const getAllJobData = async () => {
    try {
  //  if(token){
  //   const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
   
  //   const filterdData=res?.data?.filter(item => item._id==id)
  //   setGetReviwes(filterdData)
  //  }
    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get`);
   
    const filterdData=res?.data?.filter(item => item._id==id)
    setGetReviwes(filterdData)
   
  
    } catch (error) {
      console.error("Error fetching user data:", error);
     
    }}
    console.log("api call",getReviwes)
 
  return (
    <Layout1>
      {getReviwes?.map((res,i)=>(

        <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            {res?.reviews?.map((res,i)=>(
                <Reviewcard res={res} key={i} />
            ))}
           
           
          </div>
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
      ))}
    </Layout1>
  );
};

export default Reviewsdetails;
