import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedUser = (props) => {
    const {Userdashboard}=props
    let navigate = useNavigate();
    useEffect(()=>{
        const userInfo = localStorage.getItem("UserInformation");
        const userdata = JSON.parse(userInfo);
        let token=userdata?.token
        let admin=userdata?.user?.isAdmin
      if(!token){
        navigate("/login")
      }
      if(admin){
        navigate("/")
      }

    },[])
  return (
    <div>
        <Userdashboard/>
    </div>
  )
}

export default ProtectedUser