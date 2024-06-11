import React, { useEffect, useState } from "react";
import { creatormember } from "../Simple data";
import Layout1 from "../components/Layout/Layout1";
import { useParams } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BlogsDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    getSingleBlogData();
  }, [id]);

  const getSingleBlogData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get-single-blogs/${id}`
      );

      setBlogData(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <Layout1 title="blog-details">
      <div className="lg:flex justify-between items-start sm:my-10 w-11/12 mx-auto">
        <div className="mt-1 lg:w-1/2 flex justify-center">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className=" flex justify-center items-center h-96"
          >
            {blogData?.images.map((itm, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={
                    itm?.path
                      ? `${process.env.REACT_APP_API}/${itm?.path}`
                      : "https://res.cloudinary.com/dkmsgd3ua/image/upload/v1710358388/hym2mguczixkumd5u5vs.webp"
                  }
                  className="p-2 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:mt-3 md:w-[50%]">
          <div className="flex justify-between items-center pb-2 bg-gray-100 rounded-sm md:p-2">
            <p className="bg-gray-100 p-2 font-semibold text-lg text-center">
              {blogData?.title}
            </p>
            <div className="flex justify-between items-center">
              <p className="mx-1 text-xs">
                posted by{" "}
                <i className="text-teal-600 font-semibold">{blogData?.name}</i>
              </p>
              <img
                src={
                  blogData?.profilepic
                    ? blogData?.profilepic
                    : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                }
                alt={blogData?.profilepic}
                className="h-10 w-10 rounded-full mt-2 mr-2"
              />
            </div>
          </div>
          <p className="mx-1 text-xs p-2">
            Posted Date :{" "}
            <i className="text-gray-600 font-semibold">
              {dateFormat(blogData?.timestamp, " mmmm dS, yyyy")}
            </i>
          </p>
          <p className="p-3 text-md font-normal">{blogData?.blogsDetails}</p>
        </div>
      </div>
      {/* ))} */}
    </Layout1>
  );
};

export default BlogsDetails;
