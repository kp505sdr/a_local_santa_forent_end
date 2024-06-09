import React, { useEffect, useState } from "react";
import { creatormember } from "../Simple data";
import ShowBlogs from "./ShowBlogs";
import Layout1 from "../components/Layout/Layout1";
import axios from "axios";

const AllBlogs = () => {
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    getAllBlogData();
  }, []);

  const getAllBlogData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getall-blogs`,
        {}
      );
      setBlogData(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <Layout1>
      <div className="grid grid-cols-1 text-center gap-2 m-2 md:grid-cols-4">
        {blogData?.map((res, i) => (
          <ShowBlogs res={res} i={i} />
        ))}
      </div>
    </Layout1>
  );
};

export default AllBlogs;
