

import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout';
import Profilecard from '../../components/Dashboard/Profile';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserRole = () => {
    const [ChangeStatus, setChangeStatus] = useState();
    const userInfo = localStorage.getItem("UserInformation");
    const userdata = JSON.parse(userInfo);
    let token = userdata?.token;
    let {id}=useParams()
  
    const [allUser, setallUser] = useState([]);
    const [allSelfListing, setAllSelfListing] = useState();
    
   
  
    useEffect(() => {
      getAllUser();
    }, [token]);
  
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
        const filterUser=res.data?.filter(item => item._id==id)
        setallUser(filterUser);
        CreatdAllListingByUser()
      } catch (error) {
        console.error("Error fetching user data:", error);
     
      }
    };

    // -------------------created--by------------------------------------
    const CreatdAllListingByUser = async () => {
      try {
   
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/job/get`,
  
        );
        const filterListing=res.data?.filter(item => item?.createdBy[0]?.userId===id)
       setAllSelfListing(filterListing)
       
      } catch (error) {
        console.error("Error fetching user data:", error);
     
      }
    };



const UpdatedStatus=async(id)=>{
    let isAdmin=ChangeStatus
  
    try {
       
        const res = await axios.put(
          `${process.env.REACT_APP_API}/api/v1/update/user-role/${id}`,{isAdmin},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      
        getAllUser();
      } catch (error) {
        console.error("Error fetching user data:", error);
      
      }
}
   return (
     <AdminLayout>
     <div className="my-5">
       <div className="flex flex-col w-full">
         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
         <div className="bg-gray-100">
      <div className="mx-auto py-8">
        <div className="grid">
     {allUser?.map((res)=>(
             <div className="col-span-4 sm:col-span-3 bg-white rounded-md">
             <div className="text-center my-4 shadow-lg rounded-lg flex flex-col">
               <div className="space-y-3 lg:space-y-4 border-b">
                 <div className="mx-auto p-1 border-b">
                   <img
                     className="w-48 h-48 mx-auto"
                     src={
                        res?.profilepic
                         ? res?.profilepic
                         : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                     }
                     alt="Profile picture"
                   />
                   <div className="border-b-teal-600 w-1/2 border-b-2 mx-auto mb-3">
                     <h2 className="text-center text-base font-semibold mt-3 whitespace-nowrap">
                       {res?.name}
                     </h2>
                    
                   </div>
                   
                 </div>
                 <p>Role :- <span className='font-semibold text-blue-500'> {res.isAdmin?"Admin":"User"} </span></p>
                 <p className="">
                       Total Listing :- <span className='font-semibold text-red-500'>{allSelfListing?.length}</span>
                     </p>
               </div>
               <div className="space-y-3 lg:px-2 lg:space-y-2">
                 <h4 className="border-b mb-2 p-2 text-left">User Information</h4>
                 {/* p-5 flex-col gap-y-1 lg:flex-row */}
                 <div className="flex flex-col md:flex-row md:justify-around gap-y-2 p-3">
                   <div>
                     <div className="py-1 flex items-center">
                       <div className="">
                         <i className="fas fa-phone-alt text-green-600 text-xl"></i>
                       </div>
                       <div className="pl-3">
                         <p className="text-sm font-medium text-gray-800 leading-none">
                           {res?.mobile}
                         </p>
                       </div>
                     </div>
 
                     <div className="py-1 flex items-center">
                       <div className="">
                         <i className="far fa-comment-alt text-green-600 text-xl"></i>
                       </div>
                       <div className="pl-3">
                         <p className="text-sm font-medium text-gray-800 leading-none">
                           {res?.email}
                         </p>
                       </div>
                     </div>
 
                     <div className="py-1 flex items-center">
                       <div className="">
                         <i className="fas fa-user-circle text-green-600 text-xl"></i>
                       </div>
                       <div className="pl-3">
                         <p className="text-sm font-medium text-gray-800 leading-none">
                           {res?.gender}
                         </p>
                       </div>
                     </div>
                
                   </div>
               
                 </div>
               </div>
               <div className="my-4">
                        <p className="text-sm p-3 text-gray-500">Update Role</p>
                        <select
                          onChange={(e) => setChangeStatus(e.target.value)}
                          id="status"
                          name="status"
                          className="w-1/2 h-7 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
                        >
                          <option value="">Select</option>
                          <option value="true">Admin</option>
                          <option value="false">User</option>
                 
                        </select>
                        <button
                          onClick={() => UpdatedStatus(res._id)}
                          className="p-1 text-white bg-blue-500 rounded-sm text-sm ml-2"
                        >
                          Update
                        </button>
                      </div>


         
             </div>
           </div>
     ))}
        </div>
      </div>
    </div>
         </div>
       </div>
     </div>
   </AdminLayout>
   )
}

export default UserRole