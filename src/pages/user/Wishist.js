import React, { useState } from "react";

import Layout from "../../components/Dashboard/Layout";

const Wishist = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = (menu, setMenu) => {
    setMenu(!menu);
  };
  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
              <div className="flex flex-col jusitfy-start items-start">
                <div className="mt-4">
                  <p className="text-2xl tracking-tight leading-6 text-gray-600">
                    03 items
                  </p>
                </div>
                <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                  {/* Product 1 */}
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="relative">
                      <img
                        className="hidden lg:block"
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="bag"
                      />
                      <img
                        className="hidden sm:block lg:hidden"
                        src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                        alt="bag"
                      />
                      <img
                        className="sm:hidden"
                        src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                        alt="bag"
                      />
                      <button
                        aria-label="close"
                        className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                      >
                        <svg
                          className="fil-current"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L13 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Product Info */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex justify-center items-center">
                        <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                          abc
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          aria-label="show menu"
                          onClick={() =>
                            handleClick(menuVisible, setMenuVisible)
                          }
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                        >
                          <svg
                            className={
                              menuVisible ? "hidden fill-stroke" : "fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 5L5 1L1 5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <svg
                            className={
                              menuVisible ? "fill-stroke" : "hidden fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Menu */}
                    <div
                      className={
                        menuVisible
                          ? "flex flex-col justify-start items-start mt-12"
                          : "hidden"
                      }
                    >
                      <div>
                        <p className="tracking-tight text-xs leading-3 text-gray-800">
                          details
                        </p>
                      </div>
                      {/* Add more menu items here */}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="relative">
                      <img
                        className="hidden lg:block"
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="bag"
                      />
                      <img
                        className="hidden sm:block lg:hidden"
                        src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                        alt="bag"
                      />
                      <img
                        className="sm:hidden"
                        src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                        alt="bag"
                      />
                      <button
                        aria-label="close"
                        className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                      >
                        <svg
                          className="fil-current"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L13 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Product Info */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex justify-center items-center">
                        <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                          abc
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          aria-label="show menu"
                          onClick={() =>
                            handleClick(menuVisible, setMenuVisible)
                          }
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                        >
                          <svg
                            className={
                              menuVisible ? "hidden fill-stroke" : "fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 5L5 1L1 5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <svg
                            className={
                              menuVisible ? "fill-stroke" : "hidden fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Menu */}
                    <div
                      className={
                        menuVisible
                          ? "flex flex-col justify-start items-start mt-12"
                          : "hidden"
                      }
                    >
                      <div>
                        <p className="tracking-tight text-xs leading-3 text-gray-800">
                          details
                        </p>
                      </div>
                      {/* Add more menu items here */}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="relative">
                      <img
                        className="hidden lg:block"
                        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="bag"
                      />
                      <img
                        className="hidden sm:block lg:hidden"
                        src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png"
                        alt="bag"
                      />
                      <img
                        className="sm:hidden"
                        src="https://i.ibb.co/cyN26yn/Rectangle-23.png"
                        alt="bag"
                      />
                      <button
                        aria-label="close"
                        className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400"
                      >
                        <svg
                          className="fil-current"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L13 13"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Product Info */}
                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex justify-center items-center">
                        <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                          abc
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          aria-label="show menu"
                          onClick={() =>
                            handleClick(menuVisible, setMenuVisible)
                          }
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:text-gray-400 hover:bg-gray-200"
                        >
                          <svg
                            className={
                              menuVisible ? "hidden fill-stroke" : "fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 5L5 1L1 5"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <svg
                            className={
                              menuVisible ? "fill-stroke" : "hidden fill-stroke"
                            }
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Menu */}
                    <div
                      className={
                        menuVisible
                          ? "flex flex-col justify-start items-start mt-12"
                          : "hidden"
                      }
                    >
                      <div>
                        <p className="tracking-tight text-xs leading-3 text-gray-800">
                          details
                        </p>
                      </div>
                      {/* Add more menu items here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wishist;
