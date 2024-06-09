import React, { useEffect, useState } from "react";

import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import CommentTable from "../../components/Table/commentTable";
import axios from "axios";

const Comments = () => {
  const [allAds,setAllAds]=useState()
useEffect(()=>{
  getAllAds()
},[])
  const getAllAds=async()=>{
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
     
      setAllAds(res?.data)
    } catch (error) {
      
    }
  }


  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">

             <CommentTable allAds={allAds}/>
       
          </div>
        </div>

      
      </div>
    </AdminLayout>
  );
};

export default Comments;
