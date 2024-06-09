import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const user = useSelector((state) => state.user);

  // JSON.parse(localStorage.getItem("UserInformation"));
  //  const user
  console.log("admin route =>", user);

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`http://localhost:8080/api/v1/admin-auth`);

      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (user?.token) authCheck();
  }, [user?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
};

export default AdminRoute;
