import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Dashboard/Layout'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout'
import ViewUserListingTable from './ViewUserListingTable'
import axios from 'axios'

const UserListingCount = () => {
    let {id}=useParams()
  
    const [loader, setloader] = useState(false);
    const [allSelfListing, setAllSelfListing] = useState();
    useEffect(() => {
        setloader(true)
        CreatdAllListingByUser();
      }, []);
       // -------------------created--by------------------------------------
       const CreatdAllListingByUser = async () => {
        try {
     
          const res = await axios.get(
            `${process.env.REACT_APP_API}/api/v1/job/get`,
    
          );
          const filterListing=res.data?.filter(item => item?.createdBy[0]?.userId===id)
         setAllSelfListing(filterListing)
         setloader(false)
        } catch (error) {
          console.error("Error fetching user data:", error);
          setloader(false)
        }
      };
    
  return (
    <>
   
    <AdminLayout>
    <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <ViewUserListingTable allListing={allSelfListing}/>
         
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
    </> 
  )
}

export default UserListingCount