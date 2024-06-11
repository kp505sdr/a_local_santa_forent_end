import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import Commentdata from "../../components/Comment/CommentView";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommentView = () => {
  let {id}=useParams()
  const [allAds,setAllAds]=useState()
  useEffect(()=>{
    getAllAds()
  },[])
    const getAllAds=async()=>{
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/job/get`
        );

        const data=res?.data?.filter(item => item?._id==id)
       
        setAllAds(data)
      } catch (error) {
        
      }
    }
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <Commentdata allAds={allAds}/>
          </div>
        </div>

        <div className="flex flex-wrap mt-4">
        </div>
      </div>
    </AdminLayout>
  );
};

export default CommentView;
