import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedAdmin = (props) => {
  const { Admindashboard } = props;
  let navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("UserInformation");
    const userdata = JSON.parse(userInfo);
    let token = userdata?.token;
    let user = userdata?.user?.isAdmin;
    if (!token) {
      navigate("/login");
    }
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Admindashboard />
    </div>
  );
};

export default ProtectedAdmin;
