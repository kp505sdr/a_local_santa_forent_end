import React, { useState } from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout'
import axios from 'axios';
import { useEffect } from 'react';
import { set } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const PortSeting =()=>{
  const navigate=useNavigate()
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const [HostName,setHostName] =useState('');
  const [PortNumber,setPortNumber] =useState('');
  const [ServiceName,setServiceName] =useState('');
  const [ServiceEmail,setServiceEmail] =useState('');
  const [id,setId] =useState('');




  
  useEffect(() => {
    getSmtpData()
  }, []);
  const getSmtpData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get-email-config`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        res.data.map((res)=>(
          setHostName(res.hostName),
          setPortNumber(res.portNumber),
          setServiceEmail(res.serviceEmail),
          setServiceName(res.serviceName),
          setId(res._id)

        ))

    } catch (error) {
      console.error("Error fetching user data:", error);
   
    }
  };
//  ---------------------delete--port-------------------------------------------
const delFun = async (id) => {
  try {
    let conf = window.confirm("Are you sure to Permanently Delete!!");
    if (conf) {
      await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/delete-email-config/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getSmtpData()
     
      setTimeout(()=>{
        navigate("/port-create");
      },500)

    }
  } catch (error) {
    console.log(error);
  }
};



  return (
    <AdminLayout>
    <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold">
                SMTP Setings
                
              </div>
               <div className='flex justify-around'>
               <Link to="/port-create"
                    className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800"
                   
                  >
                    Create New
                  </Link>
                  <Link to="/port-update"
                    className="text-yellow-600 font-semibold cursor-pointer hover:text-yellow-800"
                 
                  >
                     Update Port
                  </Link>
               </div>
               <br />
<hr/>
<hr/>
              <div className="py-4 px-6">
              {id?"":<p className='text-red-600 p-1 font-semibold text-md  text-center'>Deleted Success! Plese Create New SMTP</p>}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="smtp.gmail.com"
                  >
                    Host Name
                  </label>
                  <p>{HostName}</p>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="portNumber"
                  >
                    Port Number
                  </label>
                 <p>{PortNumber}</p>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="serviceName"
                  >
                    Service Name
                  </label>
                 <p>{ServiceName}</p>
                </div>
                
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="service email"
                  >
                   Service Email 
                  </label>
                <p>{ServiceEmail}</p>
                </div>
              
             {id?<p onClick={()=>delFun(id)} className='font-semibold bg-red-500 p-1 text-white text-center rounded-md cursor-pointer hover:bg-red-600'>Delete Port</p>:""} 

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default PortSeting