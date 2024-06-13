import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AllUsers = ({users}) => {
  


  
  return (
   
    <div className="h-full ">
        <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
          <div className="flex items-center bg-teal-700">
          
            <p className="text-gray-200 p-1 mt-1">All Users</p>
          </div>
          <div className="h-[36rem] overflow-y-auto">
          {users?.map((res)=>(
            <Link to={`/chating-now/${res?._id}`} className="flex items-center p-2 m-2 bg-green-200 rounded-sm">
              <img
              src={`${res?.profilepic? res?.profilepic: "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
              alt="img"
              className="h-10 w-10 rounded-full"
            />
            <p className="text-start ml-2">{res?.name}</p>
          </Link>
          ))}
           
          </div>
      
        </div>
    </div>

  )
}

export default AllUsers