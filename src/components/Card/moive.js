import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "../Tabs/tabs";
import { Tab1, Tabs1 } from "../Tabs/tabs1";

const Moiveevent = ({ titile, buttonText }) => {
  //   const [getItem, setGetItem] = useState([]);

  //   console.log("=>>>>>>>>>>>>>>>>>", getItem);

  //   useEffect(() => {
  //     getdata();
  //   }, []);

  //   const getdata = async () => {
  //     const res = await axios.get("https://dummyjson.com/products");
  //     const data = res.data;
  //     setGetItem(data);
  //   };

  const handle = async () => {};

  return (
    <div className="border mx-2 border-slate-900 px-3">
      <div className="flex justify-between items-center py-3 ">
        <div className="mx-auto">
          <h2 className="text-gray-600 text-2xl font-semibold">{titile}</h2>
        </div>
        {buttonText && (
          <div className="bg-green-600 ">
            <button className="inline-flex items-center justify-center py-1.5 px-3 rounded-md font-sans font-semibold tracking-wide text-white">
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <Tabs1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-2 py-2">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto w-full">
                    <div className="relative w-full">
                      <a href="#">
                        <img
                          className="w-full h-48"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col absolute bottom-0 z-10 pb-2 ">
                        <div className="hidden text-xs left-0 mx-2 pb-1 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="text-xs mx-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto w-full">
                    <div className="relative w-full">
                      <a href="#">
                        <img
                          className="w-full h-48"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col absolute bottom-0 z-10 pb-2 ">
                        <div className="hidden text-xs left-0 mx-2 pb-1 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="text-xs mx-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto w-full">
                    <div className="relative w-full">
                      <a href="#">
                        <img
                          className="w-full h-48"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col absolute bottom-0 z-10 pb-2 ">
                        <div className="hidden text-xs left-0 mx-2 pb-1 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="text-xs mx-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto w-full">
                    <div className="relative w-full">
                      <a href="#">
                        <img
                          className="w-full h-48"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col absolute bottom-0 z-10 pb-2 ">
                        <div className="hidden text-xs left-0 mx-2 pb-1 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="text-xs mx-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto w-full">
                    <div className="relative w-full">
                      <a href="#">
                        <img
                          className="w-full h-48"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col absolute bottom-0 z-10 pb-2 ">
                        <div className="hidden text-xs left-0 mx-2 pb-1 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="text-xs mx-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            active
          >
            Personal
          </Tab1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-5">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Community
          </Tab1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-5">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Religions
          </Tab1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-5">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Cultural
          </Tab1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-5">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Moive
          </Tab1>
          <Tab1
            component={
              <div className="grid grid-cols-3 gap-5">
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-screen-lg mx-auto border border-black rounded-md">
                  <div className="rounded overflow-hidden flex flex-col mx-auto">
                    <div className="relative">
                      <a href="#">
                        <img
                          className="w-full"
                          src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
                          alt="Sunset in the mountains"
                        />
                      </a>
                      <div className="flex flex-col">
                        <div className="hidden absolute z-10 text-xs bottom-6 left-0 m-2 py-2 text-gray-600  hover:text-white  transition duration-500 ease-in-out sm:flex items-center">
                          <span>
                            Video Modeling to Tech New Skils at School, Work &
                            Home
                          </span>
                        </div>
                        <div className="hidden absolute z-10 text-xs bottom-0  m-2 py-2 text-gray-600 hover:text-white transition duration-500 ease-in-out sm:flex items-center">
                          <i className="fa fa-eye"></i>&nbsp; <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            Other
          </Tab1>
        </Tabs1>
      </div>
    </div>
  );
};

export default Moiveevent;
