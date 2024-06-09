import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../Spinner";

const Blogcard = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBlogData();
  }, []);

  const getAllBlogData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getall-blogs`
      );
      setIsLoading(false);
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

        navigate("/blogs");
        getAllBlogData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isloading) {
    return (
      <div className="flex justify-center items-center w-full">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="border-b mb-5 flex justify-between text-sm">
        <Link
          to="/add-blog"
          className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2"
        >
          Add New Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {console.log(blogData?.map((res, i) => res?.images))}
        {blogData?.map((res, i) => (
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <Link to={`/user-blogdetails/${res._id}`}>
              <div className="relative">
                <img
                  className="hover:opacity-80 h-60 md:h-32 w-full"
                  src={
                    res?.images[0]
                      ? `${process.env.REACT_APP_API}/${res?.images[0].path}`
                      : "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </div>
              <div className="px-2 py-3 mb-auto">
                <span className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                  {res?.title}
                </span>
                <p className="text-gray-500 text-sm">
                  {" "}
                  {res?.blogsDetails?.length > 100
                    ? `${res?.blogsDetails.substring(0, 100)}....`
                    : res?.blogsDetails}
                </p>
              </div>
            </Link>
            <div className="px-2 py-2 flex flex-row items-center justify-between bg-gray-100">
              <Link
                to={`/blogs-edit/${res._id}`}
                className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
              >
                <span className="ml-1 bg-green-400 text-white px-2 py-1 rounded-md">
                  Edit
                </span>
              </Link>
              <button
                onClick={() => delFun(res._id)}
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

export default Blogcard;
