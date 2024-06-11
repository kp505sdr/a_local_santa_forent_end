import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Layout1 from "../../components/Layout/Layout1";

const GoogleUserPage = () => {
  const navigate = useNavigate();

  const fetchCheckoutSession = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/login/success`, { withCredentials: true });

      if (res?.data) {
        localStorage.setItem("UserInformation", JSON.stringify(res.data));
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        toast.error("Failed to fetch user information. Please try again later.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a non-2xx status code
        toast.error(error.response.data.message || "An error occurred while processing your request.");
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server. Please check your internet connection.");
      } else {
        // Something else happened while setting up the request
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  useEffect(() => {
    fetchCheckoutSession();
  });

  return (
    <Layout1 title="Login">
      <ToastContainer />
      <div className="mt-10 sm:mb-24">
        <p className="text-center text-blue-600 text-md font-semibold pt-3">Google user login page...</p>
      </div>
    </Layout1>
  );
};

export default GoogleUserPage;
