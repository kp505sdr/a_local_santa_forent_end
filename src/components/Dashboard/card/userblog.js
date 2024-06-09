import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Userblog = () => {
  const navigate = useNavigate;
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [blogData, setBlogData] = useState([]);

  console.log("blogData =>", blogData);
  useEffect(() => {
    getAllBlogData();
  }, [token]);

  const getAllBlogData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getall-selfblog`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBlogData(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const delFun = async (id) => {
    try {
      let conf = window.confirm("Are you sure to Delete!!");
      if (conf) {
        await axios.delete(
          `${process.env.REACT_APP_API}/api/v1/delete-blogs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        getAllBlogData();
        navigate("/user-bloglist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-indigo-600 flex items-center pb-2 border-indigo-600 uppercase "></div>
        <Link
          to="/user-bloglist-add-blog"
          className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
        >
          Add New Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {console.log(blogData?.map((res, i) => res.images[0]))}
        {blogData?.map((res, i) => (
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <Link to={`/user-blogdetails/${res._id}`}>
              <div className="relative">
                <img
                  className="hover:opacity-80 h-60 md:h-32 w-full"
                  src={
                    (res?.images[0].path &&
                      `${process.env.REACT_APP_API}/${res?.images[0].path}`) ||
                    (res?.images[0] && res?.images[0])
                  }
                  alt={res?.images[0].path}
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </div>
              <div className="px-2 py-3 mb-auto">
                <span className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                  {res?.title?.length > 15
                    ? `${res?.title.substring(0, 15)}....`
                    : res?.title}
                </span>
                <p className="text-gray-500 text-sm">
                  {" "}
                  {res?.blogsDetails?.length > 50
                    ? `${res?.blogsDetails.substring(0, 50)}....`
                    : res?.blogsDetails}
                </p>
              </div>
            </Link>
            <div className="px-2 py-2 flex flex-row items-center justify-between bg-gray-100">
              <Link
                to={`/user-bloglist-edit-blog/${res?._id}`}
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-green-400 text-white px-2 py-1 rounded-md">
                  Edit
                </span>
              </Link>
              <button
                onClick={() => delFun(res?._id)}
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-red-400 text-white px-2 py-1 rounded-md">
                  Delete
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userblog;
