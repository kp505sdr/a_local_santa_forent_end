import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout'
import ReviewsTable from '../../components/Table/Reviews'
import axios from 'axios'

const AdminReviews = () => {

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
        console.log(error)
      }
    }
  return (
    <AdminLayout>
    <div className="my-5">
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <ReviewsTable allAds={allAds} />
        </div>
      </div>
    </div>
  </AdminLayout>
  )
}

export default AdminReviews