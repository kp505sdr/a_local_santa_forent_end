import React, { useEffect, useState } from "react";
import Layout1 from "../../components/Layout/Layout1";
import MyImage from "../../components/Blogs/herosection";
import Star from "../../components/UI/start";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogDescription } from "../../Simple data";
import axios from "axios";
import dateFormat from "dateformat";
import AnchorLink from "react-anchor-link-smooth-scroll";
const ReviewsAndListing = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let navigate = useNavigate();
  var token = userdata?.token;
  var localEmail = userdata?.user?.email;

  const [ListingDetails, setListingDetails] = useState();
  const [likeMessage, setlikeMessage] = useState();
  const [LikeAlert, setLikeAlert] = useState(false);

  const [comments, setComments] = useState();

  let { id } = useParams();

 


  // ------------------------------------api---------------------------------------------

  useEffect(() => {
    getAllJobData();
    ViewsFun();
  }, []);

  // ----------------------------views---API---------------------------------------
  const ViewsFun = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API}/api/v1/job/view/${id}`);
    } catch (error) {
      console.error("Error adding views:", error);
    }
  };

  // --------------------like API----------------------------------------------
  const LikeFun = async (id) => {
    console.log("like token",token)
    if (!token) {
      navigate("/login");
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/job/like/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      getAllJobData();
      setlikeMessage(res?.data);
      setLikeAlert(true);
      setTimeout(() => {
        setLikeAlert(false);
      }, 500);
    } catch (error) {
      console.error("Error adding Like:", error);
    }
  };
  // -------------------------comment-fun-API----------------------------------------------
  const CommentFun = async (comment) => {
    if (!token) {
      navigate("/login");
    }
    try {
      await axios.put(
        `${process.env.REACT_APP_API}/api/v1/job/Comment/${id}`,
        { comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      getAllJobData();
    } catch (error) {
      console.error("Error adding Comment:", error);
    }
  };

  const getAllJobData = async () => {
    try {
      if (token) {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const filterdData = res?.data?.filter((item) => item._id == id);
        setListingDetails(filterdData);
      }

      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
      const filterdData = res?.data?.filter((item) => item._id == id);
      setListingDetails(filterdData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    CommentFun(comments);
    setComments("");
  };
  // ---------------------delite----comment---------------------------------------------------------------------
  const CommentDelfun = async (commentId) => {
    if (!token) {
      navigate("/login");
    }
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/job/delete/comment/${commentId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      getAllJobData();
    } catch (error) {
      console.error("Error Deleting Comment:", error);
    }
  };
  return (
    <Layout1>
      {ListingDetails?.map((res, i) => (
        <div className="pb-10">
          <div className="m-0.5 lg:w-11/12 mx-auto">
            <MyImage
              imgs={res?.images}
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
                        <p>{res?.name}</p>
                      </div>{" "}
                      <div className="flex gap-x-2 items-center py-1.5">
                        <i className="fa-solid fa-phone  text-teal-400"></i>{" "}
                        <h3 className="font-semibold">Contact Number :</h3>{" "}
                        <p>{res?.contactMobile}</p>
                      </div>{" "}
                      <div className="flex gap-x-2 items-center py-1.5">
                        <i className="fa-regular fa-envelope  text-teal-400"></i>{" "}
                        <h3 className="font-semibold">Contact Email :</h3>{" "}
                        <p>{res?.contactEmail}</p>
                      </div>{" "}
                    </div>
                    <div className="">
                      {" "}
                      <div className="flex gap-x-2 items-center py-1.5">
                        <i className="fa-solid fa-location-dot  text-teal-400"></i>{" "}
                        <h3 className="font-semibold">Address :</h3>{" "}
                        <p>{res?.address}</p>
                      </div>{" "}
                      <div className="flex gap-x-2 items-center py-1.5">
                        <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                        <h3 className="font-semibold">Url :</h3>{" "}
                        <p>{res?.url}</p>
                      </div>
                      <div className="flex gap-x-2 items-center py-1.5">
                        <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                        <h3 className="font-semibold">Ad Expire Date :</h3>{" "}
                        <p>{dateFormat(res?.expDate, " mmmm dS, yyyy")}</p>
                      </div>
                      <Link
                        to={`/reviews-details/${res._id}`}
                        className="flex gap-x-2 items-center py-1.5"
                      >
                        {/* <i className="fa-solid fa-clock text-teal-400"></i>{" "} */}
                        <h3 className="font-semibold">Reviews :</h3>{" "}
                        <p>
                          <Star
                            stars={res?.totalRating?.averageRating}
                            reviews={res?.totalRating?.numberOfPeople}
                            color="#22c55e"
                          />
                        </p>
                      </Link>
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
                          {res?.title}
                        </h1>

                        <div className="sm:flex justify-between">
                          <div className="inline-flex items-center">
                            <p className="text-sm ">
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                              </span>{" "}
                            </p>
                            <p className="ml-2">
                              {dateFormat(res?.createdAt, "mmmm dS, yyyy")}
                            </p>
                          </div>
                          {LikeAlert ? (
                            <i className="text-center ml-10">
                              {likeMessage?.message == "Liked" ? (
                                <span className="text-green-500">
                                  You Have Liked
                                </span>
                              ) : (
                                <span className="text-red-500">
                                  You Have Unliked
                                </span>
                              )}
                            </i>
                          ) : (
                            ""
                          )}
                          <div className="text-base flex justify-between sm:gap-x-10 mt-4 sm:mt-0">
                            <p className="flex items-stretch gap-x-2">
                              <span
                                onClick={() => LikeFun(res?._id)}
                                className="cursor-pointer"
                              >
                                {
                                  <i className="fa-solid fa-heart text-2xl text-red-500"></i>
                                }
                              </span>{" "}
                              {res?.likes?.length}
                            </p>

                            <p className="flex items-center gap-x-2">
                              <AnchorLink
                                href="#comment"
                                className="flex items-stretch gap-x-1"
                              >
                                <span>
                                  <i className="fa-regular fa-comment text-2xl text-teal-600"></i>
                                </span>
                                {res?.comments?.length}
                              </AnchorLink>
                            </p>

                            <p className="flex items-stretch gap-x-1">
                              <span>
                                <i className="fa fa-eye text-2xl text-blue-600 "></i>{" "}
                              </span>
                              {res?.views}
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
                      dangerouslySetInnerHTML={{ __html: res?.description }}
                    />

                    <div className="">
                      <div className="flex gap-x-3 mt-3">
                        {res?.tags?.map((res, i) => (
                          <button className="text-sm text-teal-400 px-2 bg-teal-50 py-1 rounded-md border border-teal-600">
                            {res}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="w-full pt-10 md:hidden">
                      <div className="">
                        <h2 className="font-semibold text-xl">Ads Details</h2>
                      </div>

                      <div className=" flex flex-col md:flex-row justify-between lg:w-10/12">
                        <div className="">
                          {" "}
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-regular fa-user text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Contact Name :</h3>{" "}
                            <p>{res?.name}</p>
                          </div>{" "}
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-solid fa-phone  text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Contact Number :</h3>{" "}
                            <p>{res?.contactMobile}</p>
                          </div>{" "}
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-regular fa-envelope  text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Contact Email :</h3>{" "}
                            <p>{res?.contactEmail}</p>
                          </div>{" "}
                        </div>
                        <div className="">
                          {" "}
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-solid fa-location-dot  text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Address :</h3>{" "}
                            <p>{res?.address}</p>
                          </div>{" "}
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Url :</h3>{" "}
                            <p>{res?.url}</p>
                          </div>
                          <div className="flex gap-x-2 items-center py-1.5">
                            <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                            <h3 className="font-semibold">Ad Expire Date :</h3>{" "}
                            <p>{dateFormat(res?.expDate, " mmmm dS, yyyy")}</p>
                          </div>
                          <Link
                            to={`/reviews-details/${res._id}`}
                            className="flex gap-x-2 items-center py-1.5"
                          >
                            {/* <i className="fa-solid fa-clock text-teal-400"></i>{" "} */}
                            <h3 className="font-semibold">Reviews :</h3>{" "}
                            <p>
                              <Star
                                stars={res?.totalRating?.averageRating}
                                reviews={res?.totalRating?.numberOfPeople}
                                color="#22c55e"
                              />
                            </p>
                          </Link>
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
                      {res?.comments?.map((res, i) => (
                        <>
                          {res?.email == localEmail ? (
                            <div className="border rounded-md p-3 my-3 bg-blue-100">
                              <div className="flex gap-3 items-center justify-end mr-2 mb-4">
                                <p
                                  onClick={() => CommentDelfun(res._id)}
                                  className="mr-[50%] md:mr-[85%] text-red-500"
                                >
                                  <i className="fas fa-trash" />
                                </p>

                                <div className="flex flex-col">
                                  <h5 className="font-normal">{res?.name}</h5>{" "}
                                  <p className="text-xs">
                                    {dateFormat(
                                      res?.timestamp,
                                      " mmmm dS, yyyy"
                                    )}
                                  </p>
                                </div>
                                <img
                                  src={
                                    res.profilepic
                                      ? res?.profilepic
                                      : "https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                  className="object-cover w-12 h-12 rounded-full"
                                />
                              </div>
                              <div className="">
                                <p className="text-sm text-left">
                                  {res?.content}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="border rounded-md p-3 my-3 flex flex-col bg-gray-100 ">
                              <div className="flex gap-3 items-center mr-2 mb-4">
                                <img
                                  src={
                                    res.profilepic
                                      ? res?.profilepic
                                      : "https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  }
                                  className="object-cover w-12 h-12 rounded-full"
                                />

                                <div className="flex flex-col">
                                  <h5 className="font-normal">{res?.name}</h5>{" "}
                                  <p className="text-xs">
                                    {dateFormat(
                                      res?.timestamp,
                                      " mmmm dS, yyyy"
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="">
                                <p className="text-sm text-left">
                                  {res?.content}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* ------------------------------------------------------------------------------ */}
                          {/* <div className="border rounded-md p-3 my-3 flex flex-row ">
                          <div className="flex gap-3 items-center mr-2 mb-4">
                            <img
                              src={
                                res.profilepic
                                  ? res?.profilepic
                                  : "https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              }
                              className="object-cover w-12 h-12 rounded-full"
                            />

                            <div className="flex flex-col">
                              <h3 className="font-bold">karan</h3>{" "}
                              <p className="text-xs">
                                10/12/2002
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <p className="text-sm ml-8">testingi kar raha hu</p>
                          </div>
                        </div> */}
                        </>
                      ))}
                    </div>

                    {/* comment box */}
                    <form
                      onSubmit={commentSubmit}
                      className="flex justify-center my-3 "
                    >
                      <div className=" rounded-[12px] w-full p-2 shadow-md border">
                        {/* <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
                                 Comment
                               </p> */}
                        <textarea
                          className=" px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
                          placeholder="Add your comments here"
                          required
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        />
                        <div className="flex justify-between mt-2">
                          <button
                            type="submit"
                            className=" py-2 font-semibold w-[150px] bg-teal-400 px-3 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600"
                          >
                            Submit comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ))}
    </Layout1>
  );
};

export default ReviewsAndListing;
