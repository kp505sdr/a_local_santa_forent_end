
import React, { useEffect, useState } from "react";
import AllUsers from "./AllUsers";
import axios from "axios";

const ChatApp = () => {
 const [users,setUsers]=useState()
 const [AllAds,setAllAds]=useState()


 
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  let logUserId=userdata?.user?._id

  const getAllUsers = async () => {
   try {
    
     const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/get/allusers`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );


    //  ---------------------------get-conersation----------------------------------------

    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/conversation/message`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Extract sender IDs from the conversations/messages
    const senderIds = res?.data?.map((conversation) => conversation.senderId);

    // Remove duplicate sender IDs
    const uniqueSenderIds = [...new Set(senderIds)];
    const filterLoggedinuser=response?.data?.filter(item => item._id!==logUserId)  //remove loggedin user


    // ----------------------------function for find user who messaged to sailer-------------------------------------------
   
    function filterData(responseData, filterArray) {
      return responseData?.filter(item => filterArray.includes(item._id));
  }
  const filteredData = filterData(filterLoggedinuser, uniqueSenderIds);
     setUsers(filteredData)
   } catch (error) {
     console.error("Error fetching messages:", error);
   }
 };


  
// --------------------------validation--if any listing--then------chat and email-------userDashboard-- will show----------------------------
const getAllJobData = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAllAds(res?.data)
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
}

 useEffect(()=>{
  getAllUsers()
  getAllJobData()
  
 },[])

  return (
    <div className="bg-gray-300 my-3 flex flex-col justify-between"> 
    <div className="">
     {AllAds?.length==0?<span className="p-2 text-red-600">When you create the listing, this will be open!</span>:
         <AllUsers users={users}/>
      }
    </div>
    

    </div>
  );
};

export default ChatApp;
