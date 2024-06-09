
import React, { useState } from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PortUpdate =()=>{
    const Navigate=useNavigate()
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const [HostName,setHostName] =useState('');
  const [PortNumber,setPortNumber] =useState('');
  const [ServiceName,setServiceName] =useState('');
  const [ServiceEmail,setServiceEmail] =useState('');
  const [ServiceEmailPassword,setServiceEmailPassword] =useState('');
  const [id,setId]=useState('')
  const [Message,setMessage]=useState('')


  
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
          setServiceEmailPassword(res.emailPassword),
          setId(res._id)

        ))

    } catch (error) {
      console.error("Error fetching user data:", error);
   
    }
  };
  // ------------------------------put smtp api------------------------------------
  const updateSmtpData = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/update-email-config/${id}`,smtpData,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(res.data?.message)
      setTimeout(()=>{
        Navigate("/smtp-seting")
      },500)
    } catch (error) {
      console.error("Error fetching user data:", error);
      setMessage(error.response.data?.error)

   
    }
  };

const smtpData={
  hostName:HostName,
  portNumber:PortNumber,
  serviceName:ServiceName,
  serviceEmail:ServiceEmail,
  emailPassword:ServiceEmailPassword
}
const HandleSubmit=async(e)=>{
  e.preventDefault()
  updateSmtpData(smtpData)
}

  return (
    <AdminLayout>
    <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold">
                SMTP Setings
                
              </div>
              <p className='text-green-600 font-semibold text-sm  text-center'>{Message}</p>
              <form onSubmit={HandleSubmit} className="py-4 px-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="smtp.gmail.com"
                  >
                    Host Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    required
                    value={HostName}
                    onChange={(e)=>setHostName(e.target.value)}
                    placeholder="smtp.gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="portNumber"
                  >
                    Port Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    required
                    value={PortNumber}
                    onChange={(e)=>setPortNumber(e.target.value)}
                    placeholder="Enter Port Number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="serviceName"
                  >
                    Service Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="service name"
                    required
                    value={ServiceName}
                    onChange={(e)=>setServiceName(e.target.value)}
                    placeholder="Enter Service Name like:- gmail"
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="service email"
                  >
                   Service Email 
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    required
                    value={ServiceEmail}
                    onChange={(e)=>setServiceEmail(e.target.value)}
                    placeholder="Enter Service Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="emailPassword"
                  >
                   Service Email Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    required
                    value={ServiceEmailPassword}
                    onChange={(e)=>setServiceEmailPassword(e.target.value)}
                    placeholder="Enter Service Email Password"
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  <button
                    className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default PortUpdate