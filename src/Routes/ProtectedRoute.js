import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // Fetch user information from local storage
  const getUser = async () => {
    const userinfo = localStorage.getItem("UserInformation");
    if (!userinfo) {
      localStorage.clear();
      return false;
    }

    try {
      dispatch(showLoading());
      const userdata = JSON.parse(userinfo);

      dispatch(hideLoading());

      if (userdata && userdata.user) {
        dispatch(setUser(userdata.user));
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, dispatch]);

  if (!localStorage.getItem("UserInformation")) {
    return <Navigate to="/login" />;
  }

  return children;
}
