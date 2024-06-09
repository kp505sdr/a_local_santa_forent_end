import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"; // Correct import for Outlet
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const UserRoute = () => {
  const [ok, setOk] = useState(false);

  const user = useSelector((state) => state.user);

  //   const user = localStorage.getItem("UserInformation");
  //   console.log("user route =>", JSON.parse(user));
  console.log("user route =>", user);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/user-auth`);
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Auth check failed", error);
        setOk(false); // Set to false if there's an error
      }
    };
    if (!user?.token) {
      console.log("token getting here");
      authCheck();
    }
  }, [user?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default UserRoute;
