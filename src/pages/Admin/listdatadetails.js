import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const Listdatadetails = () => {
  const { id } = useParams();
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [loader, setLoader] = useState(false);
  const [Listing, setListing] = useState([]);

  useEffect(() => {
    getListingData();
  }, [token, id]);

  const getListingData = async () => {
    try {
      setLoader(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/getsingle/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setListing(res?.data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };

  if (loader) {
    return <Spinner />;
  }

  return (
    <AdminLayout>
      <div>Get List data details</div>
      {Listing?.images?.map((imagePath, index) => {
        return (
          <img
            key={index}
            src={`${process.env.REACT_APP_API}/${imagePath.replace(
              /\\/g,
              "/"
            )}`}
            alt={`Image ${index + 1}`}
            style={{ width: "200px", height: "200px", margin: "5px" }}
          />
        );
      })}
    </AdminLayout>
  );
};

export default Listdatadetails;
