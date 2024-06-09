import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout';
import Profilecard from '../../components/Dashboard/Profile';
import axios from 'axios';


const AdminProfileDetails = () => {
      // -----------------api-call-------------below----------
      const userInfo = localStorage.getItem("UserInformation");
      const userdata = JSON.parse(userInfo);
      let token=userdata?.token
      const [userData,setUserData]=useState()
 
   useEffect(() => {
     getUserData();
   }, [token]);
 
   const getUserData = async () => {
     try {
       const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/getsingle/user`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
       setUserData(res?.data)
   
     } catch (error) {
       console.error("Error fetching user data:", error);
      
     }}
   
   return (
     <AdminLayout>
     <div className="my-5">
       <div className="flex flex-col w-full">
         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
           <Profilecard userData={userData}/>
         </div>
       </div>
     </div>
   </AdminLayout>
   )
}

export default AdminProfileDetails