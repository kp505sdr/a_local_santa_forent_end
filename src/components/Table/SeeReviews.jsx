import React, { useEffect, useState } from "react";
import ReviewsData from "./ReviewsData";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminLayout from "../Dashboard/Layout/adminlayout";

const SeeReviews = () => {
  const [getReviwes, setGetReviwes] = useState();
  let { id } = useParams();

  useEffect(() => {
    getAllJobData();
  }, []);

  const getAllJobData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );

      const filterdData = res?.data?.filter((item) => item._id == id);
      setGetReviwes(filterdData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("getReviwes", getReviwes);
  return (
    <AdminLayout>
      {getReviwes?.map((res,i)=>(

<div className="my-5">
<div className="flex flex-wrap">
  <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    {res?.reviews?.map((res,i)=>(
        <ReviewsData res={res} key={i} />
    ))}
   
   
  </div>
  <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
</div>
</div>
))}
    </AdminLayout>
  );
};

export default SeeReviews;
