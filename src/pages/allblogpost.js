import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowBlogs from "./ShowBlogs";
import { NavLink } from "react-router-dom";
import Layout1 from "../components/Layout/Layout1";

const Allblogpost = () => {
  const [loading, setLoading] = useState(false);

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getAllBlogData();
  }, []);
  // --------------------------call-all-blogs-api----------------------------------
  const getAllBlogData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getall-blogs`
      );

      setBlogData(res?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };
  return (
    <Layout1 title="Local Blogs Post">
      <div className="mx-auto py-10">
        <div className="flex flex-col justify-center items-center pb-5">
          <p className="text-xl sm:text-2xl font-semibold">All Blogs</p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4 m-auto">
      {creatormember.map((m, idx) => (
        <div
          key={idx}
          className="w-full m-auto shadow hover:shadow-teal-300"
        >
          <CardBlog
            hrefLink={m.link}
            title={m.title}
            description={m.decscription}
          />
        </div>
      ))}
    </div> */}
        <p className="text-blue-600 font-semibold">
          {loading ? "Blogs Loading..." : ""}
        </p>
        <div className="grid grid-cols-1 text-center gap-2 m-2 md:grid-cols-4">
          {blogData?.map((res, i) =>
            i < 4 ? <ShowBlogs res={res} i={i} /> : ""
          )}
        </div>
        <NavLink
          to="/allblogs"
          className="text-md font-medium m-2 text-blue-700  font-primary leading-8"
        >
          View More
        </NavLink>
      </div>
    </Layout1>
  );
};

export default Allblogpost;
