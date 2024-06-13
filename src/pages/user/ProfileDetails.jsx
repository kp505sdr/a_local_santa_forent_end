import React, { useEffect, useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import Profilecard from "../../components/Dashboard/Profile";
import axios from "axios";

const ProfileDetails = () => {
  // -----------------api-call-------------below----------
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const [userData, setUserData] = useState();

  useEffect(() => {
    getUserData();
  }, [token]);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getsingle/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("user profile",res)
      setUserData(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <Layout userData={userData}>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
            <Profilecard userData={userData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileDetails;
