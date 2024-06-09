import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import Navbar from "../Navbars/Navbar";
import { Footer } from "../footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MyImage from "./herosection";
import Header from "./herosection/Header";
import { BlogDescription } from "../../Simple data/index";
import Layout1 from "../Layout/Layout1";
import ChatNow from "../ChatNow";
import { responsiveConfig } from "../../pages/Home";
import Star from "../UI/start";

const ListingDetailsFun = () => {
  const herosectionImg = [
    {
      id: 1,
      image:
        "https://nris.com/upload/country/152194054262639fda95ac05.12411768.jpg",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1691497254534-fec9bcf9c259?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    },
    {
      id: 3,
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      id: 4,
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
  ];

  const responsiveConfig2 = {
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <Layout1>
      <div className="pb-10">
        <div className="m-0.5 lg:w-11/12 mx-auto">
          <MyImage
            imgs={herosectionImg}
            Children={
              <div className="w-full md:pt-10 hidden md:block">
                <div className="">
                  <h2 className="font-semibold text-xl">Ads Details :</h2>
                </div>

                <div className=" flex flex-col justify-between lg:w-10/12">
                  <div className="">
                    {" "}
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-regular fa-user text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Contact Name :</h3>{" "}
                      <p>Rohit</p>
                    </div>{" "}
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-solid fa-phone  text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Contact Number :</h3>{" "}
                      <p>0123456789</p>
                    </div>{" "}
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-regular fa-envelope  text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Contact Email :</h3>{" "}
                      <p>rohit123@gmail.com</p>
                    </div>{" "}
                  </div>
                  <div className="">
                    {" "}
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-solid fa-location-dot  text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Address :</h3> <p>234</p>
                    </div>{" "}
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Url :</h3> <p>Rohit</p>
                    </div>
                    <div className="flex gap-x-2 items-center py-1.5">
                      <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                      <h3 className="font-semibold">Ad Expire Date :</h3>{" "}
                      <p>27-02-2021</p>
                    </div>
                    <div className="flex gap-x-2 items-center py-1.5">
                      {/* <i className="fa-solid fa-clock text-teal-400"></i>{" "} */}
                      <h3 className="font-semibold">Reviews :</h3>{" "}
                      <p>
                        <Star stars={3.5} reviews={80} color="#22c55e" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <main className="px-0.5 sm:w-11/12 mx-auto sm:pt-8">
          {/* <Breadcrumb /> */}
          {/* <Header imgs={herosectionImg} /> */}
          <div className="flex justify-between">
            <div className="w-full px-1 sm:px-0 mb-8">
              <div className="flex flex-col md:flex-row gap-x-5">
                <div className="flex-1">
                  <div className="py-3 sm:py-8 md:py-5">
                    <div className=" mx-auto py-3">
                      <h1 className="text-2xl font-bold text-gray-800 sm:mb-2">
                        Blog Title Here
                      </h1>

                      <div className=" sm:flex justify-between">
                        <div className="">
                          <p className="text-sm">
                            <span>
                              <i className="fas fa-calendar-alt"></i>
                            </span>{" "}
                            April 4, 2023{" "}
                          </p>
                        </div>
                        <div className="text-base flex justify-between sm:gap-x-10 mt-4 sm:mt-0">
                          <p className="flex items-stretch gap-x-2">
                            <span>
                              <i className="fa-solid fa-heart text-2xl text-red-500"></i>
                            </span>{" "}
                            500
                          </p>

                          <p className="flex items-center gap-x-2">
                            <AnchorLink
                              href="#comment"
                              className="flex items-stretch gap-x-1"
                            >
                              <span>
                                {" "}
                                <i className="fa-regular fa-comment text-2xl text-teal-600"></i>
                              </span>{" "}
                              200
                            </AnchorLink>
                          </p>
                          <p className="flex items-stretch gap-x-1">
                            <span>
                              <i className="fa fa-eye text-2xl text-blue-600 "></i>{" "}
                            </span>
                            1000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h6 className="font-semibold text-2xl">Description</h6>
                  </div>

                  <div
                    className="text-gray-700 mb-4 border p-2 rounded-md"
                    dangerouslySetInnerHTML={{ __html: BlogDescription }}
                  />

                  <div className="">
                    <h2 className="font-semibold text-xl">Tags</h2>
                    <div className="flex gap-x-3 mt-3">
                      <button className="text-sm text-teal-400 px-2 bg-teal-50 py-1 rounded-md border border-teal-600">
                        Job
                      </button>
                      <button className="text-sm text-teal-400 px-2 bg-teal-50 py-1 rounded-md border border-teal-600">
                        Gym
                      </button>
                      <button className="text-sm text-teal-400 px-2 bg-teal-50 py-1 rounded-md border border-teal-600">
                        Centre
                      </button>
                      <button className="text-sm text-teal-400 px-2 bg-teal-50 py-1 rounded-md border border-teal-600">
                        Swiming Pool
                      </button>
                    </div>
                  </div>

                  <div className="w-full pt-10 md:hidden">
                    <div className="">
                      <h2 className="font-semibold text-xl">Ads Details :</h2>
                    </div>

                    <div className=" flex flex-col md:flex-row justify-between lg:w-10/12">
                      <div className="">
                        {" "}
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-regular fa-user text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Contact Name :</h3>{" "}
                          <p>Rohit</p>
                        </div>{" "}
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-solid fa-phone  text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Contact Number :</h3>{" "}
                          <p>0123456789</p>
                        </div>{" "}
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-regular fa-envelope  text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Contact Email :</h3>{" "}
                          <p>rohit123@gmail.com</p>
                        </div>{" "}
                      </div>
                      <div className="">
                        {" "}
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-solid fa-location-dot  text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Address :</h3>{" "}
                          <p>234</p>
                        </div>{" "}
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Url :</h3> <p>Rohit</p>
                        </div>
                        <div className="flex gap-x-2 items-center py-1.5">
                          <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                          <h3 className="font-semibold">Ad Expire Date :</h3>{" "}
                          <p>27-02-2021</p>
                        </div>
                        <div className="flex gap-x-2 items-center py-1.5">
                          {/* <i className="fa-solid fa-clock text-teal-400"></i>{" "} */}
                          <h3 className="font-semibold">Reviews :</h3>{" "}
                          <p>
                            <Star stars={3.5} reviews={80} color="#22c55e" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      Sponsered Ads
                    </h2>
                  </div>
                  <div className="w-full sm:w-2/3 m-auto lg:ml-0">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          responsiveConfig={responsiveConfig}
                          text="Chat Now"
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* comment view msg */}
                  <div className="py-3">
                    <h2 className="text-xl font-semibold">Comments</h2>
                  </div>
                  <div
                    id="comment"
                    className="flex flex-col mb-5 h-96 overflow-y-auto "
                  >
                    <div className=" border rounded-md p-3 my-3 flex flex-col justify-between">
                      <div className="flex gap-3 items-center mr-2 mb-4">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="object-cover w-12 h-12 rounded-full"
                        />

                        <div className="flex flex-col">
                          <h3 className="font-bold">Sachin</h3>{" "}
                          <p className="text-xs">Posted on 2023-10-02 15:15</p>
                        </div>
                      </div>
                      <div className="">
                        {" "}
                        <p className="text-sm">
                          Check your Internet speed in under 30 seconds.
                        </p>
                      </div>
                    </div>{" "}
                    <div className=" border rounded-md p-3 my-3 flex flex-col justify-between">
                      <div className="flex gap-3 items-center mr-2 mb-4">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="object-cover w-12 h-12 rounded-full"
                        />

                        <div className="flex flex-col">
                          <h3 className="font-bold">Sachin</h3>{" "}
                          <p className="text-xs">Posted on 2023-10-02 15:15</p>
                        </div>
                      </div>
                      <div className="">
                        {" "}
                        <p className="text-sm">
                          Check your Internet speed in under 30 seconds. The
                          speed test usually transfers less than 40 MB of data,
                          but may transfer more data on fast connections. Check
                          your Internet speed in under 30 seconds.
                        </p>
                      </div>
                    </div>
                    <div className=" border rounded-md p-3 my-3 flex flex-col  justify-between">
                      <div className="flex gap-3 items-center mr-2 mb-4">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="object-cover w-12 h-12 rounded-full"
                        />

                        <div className="flex flex-col">
                          <h3 className="font-bold">Sachin</h3>{" "}
                          <p className="text-xs">Posted on 2023-10-02 15:15</p>
                        </div>
                      </div>

                      <div className="">
                        {" "}
                        <p className="text-sm">
                          Check your Internet speed in under 30 seconds. The
                          speed test usually transfers less than 40 MB of data,
                          but may transfer more data on fast connections. Check
                          your Internet speed in under 30 seconds. The speed
                          test usually transfers less than 40 MB of data, but
                          may transfer more data on fast connections.Check your
                          Internet speed in under 30 seconds. The speed test
                          usually transfers less than 40 MB of data, but may
                          transfer more data on fast connections.Check your
                          Internet speed in under 30 seconds. The speed test
                          usually transfers less than 40 MB of data, but may
                          transfer more data on fast connections.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* comment box */}
                  <form className="flex justify-center my-3 ">
                    <div className=" rounded-[12px] w-full p-2 shadow-md border">
                      {/* <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
                        Comment
                      </p> */}
                      <textarea
                        className=" px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
                        placeholder="Add your comments here"
                        defaultValue={""}
                      />
                      <div className="flex justify-between mt-2">
                        {/* <p className="text-sm text-blue-900 ">
                      Enter atleast 15 characters
                    </p> */}
                        <button className=" py-2 font-semibold w-[150px] bg-teal-400 px-3 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
                          Submit comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* contact */}
                <div className="mt-5 sm:mt-0 px-4 py-4 bg-yellow-200 w-full md:w-3/12 max-h-max">
                  <div className="mx-auto text-center py-3 bg-gray-600 rounded-md">
                    <h3 className="text-lg font-bold text-white ">
                      Contact Advertiser
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col items-center p-5">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1683865775275-a576c7588bc8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="h-24 w-24 rounded-full bg-black"
                      />
                      <div className="flex flex-col items-center py-2 gap-y-2">
                        <p className="font-semibold">Amit</p>

                        <p className="">
                          {" "}
                          <i className="fa-solid fa-clock text-teal-400 mx-2"></i>{" "}
                          4 minutes ago
                        </p>
                        <p className="">
                          {" "}
                          <i className="fa-solid fa-phone  text-teal-400 mx-2"></i>{" "}
                          {""} 0123456789
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="bg-teal-700 hover:bg-teal-600 mb-5 text-center text-white rounded-md cursor-pointer">
                        <button className="text-sm sm:text-base font-semibold px-3 py-1.5">
                          Login to chat {""}{" "}
                          <i className="fa-regular fa-comment mx-2"></i>
                        </button>
                      </div>{" "}
                      <div className="bg-teal-700 hover:bg-teal-600 mb-5 text-center text-white rounded-md cursor-pointer">
                        <button className="text-sm sm:text-base font-semibold px-3 py-1.5">
                          Reply by email {""}{" "}
                          <i className="fa-regular fa-envelope mx-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div className="pb-4">
                        <h2 className=" text-xl text-center py-2 bg-blue-700 text-white rounded-md">
                          Social Media
                        </h2>
                      </div>
                      {/* <div className=" my-2 bg-gray-700 text-center text-white rounded-md px-1">
                        <button className="py-2 whitespace-nowrap ">
                          <i className="fa-regular fa-bookmark"></i>{" "}
                          <span> Save this ad</span>
                        </button>
                      </div> */}

                      <div className="grid grid-cols-4 w-3/4 sm:max-w-sm mx-auto">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-center"
                        >
                          <i className="fa-brands fa-facebook text-3xl p-2 cursor-pointer text-blue-600 hover:opacity-50"></i>
                        </a>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-center"
                        >
                          <i className="fa-brands fa-youtube text-3xl p-2 cursor-pointer text-red-600 hover:opacity-50"></i>
                        </a>{" "}
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-center"
                        >
                          <i className="fa-brands fa-linkedin text-3xl p-2 cursor-pointer text-blue-800 hover:opacity-50"></i>
                        </a>{" "}
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="text-center"
                        >
                          <i className="fa-brands fa-twitter text-3xl p-2 cursor-pointer hover:opacity-50"></i>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      Fixed Ads
                    </h2>
                  </div>
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full pb-5">
                    <div className="px-2">
                      <div className="w-full ">
                        <ChatNow
                          hrefLink="www.test.com"
                          responsiveConfig={responsiveConfig2}
                          textSize="text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout1>
  );
};

export default ListingDetailsFun;
