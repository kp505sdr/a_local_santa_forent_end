import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import Layout from "../../components/Dashboard/Layout/index";

const AdsDetails = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let navigate = useNavigate();
  var token = userdata?.token;

  const today = new Date().toISOString().split("T");
  // State variable to manage the minimum date
  const [minDate, setMinDate] = useState(today);

  const [ListingDetails, setListingDetails] = useState([]);

  const [ChangeStatus, setChangeStatus] = useState();
  const [Subscrption, setSubscrption] = useState();

  let { id } = useParams();

  // ------------------------------------api---------------------------------------------

  useEffect(() => {
    getSponsoredAdsData();
  }, []);

  const getSponsoredAdsData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get-ads/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setListingDetails(res?.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // ---------------------------update-status---------------------------
  const updatefun = async (id) => {
    if (!token) {
      navigate("/login");
    }
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/update-ads/${id}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("after update", res);
    } catch (error) {
      console.error("Error Status Update:", error);
    }
  };

  const data = {
    status: ChangeStatus,
    subscrption: Subscrption,
    expDate: minDate,
  };
  const UpdatedStatus = async (id) => {
    // updatefun(id);
  };

  return (
    <Layout>
      <div className="pb-10">
        <div className="m-0.5 lg:w-11/12 mx-auto">
          <div className="w-full md:pt-10  ">
            <div className="">
              <h2 className="font-semibold text-xl"> Details :</h2>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className=" flex flex-col justify-between lg:w-11/12">
                <div className="">
                  {" "}
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-regular fa-user text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Name :</h3>
                    <p>{ListingDetails?.name}</p>
                  </div>{" "}
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-regular fa-envelope  text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Email :</h3>{" "}
                    <p>{ListingDetails?.email}</p>
                  </div>{" "}
                </div>
                <div className="">
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Url :</h3>{" "}
                    <a href={`${ListingDetails?.url}`} target="_blank" className="cursor-pointer text-blue-700 hover:text-blue-500">{ListingDetails?.url}</a>
                  </div>
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-solid fa-globe  text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Ads :</h3>{" "}
                    <p>{ListingDetails?.selectads}</p>
                  </div>
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Created Date :</h3>{" "}
                    <p>
                      {dateFormat(ListingDetails?.timestamp, " mmmm dS, yyyy")}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center py-1.5">
                    <i className="fa-solid fa-clock text-teal-400"></i>{" "}
                    <h3 className="font-semibold">Ad Expire Date :</h3>{" "}
                    <p>
                      {dateFormat(ListingDetails?.expDate, " mmmm dS, yyyy")}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center py-1.5">
                  <p className="font-semibold">
                    Current Status :{" "}
                    <span
                      className={`${
                        ListingDetails?.status == "active"
                          ? "text-green-700"
                          : "text-yellow-700"
                      }`}
                    >
                      {ListingDetails?.status}
                    </span>
                  </p>
                  </div>
                </div>
                <div>
                  {/* <p className="text-sm">
                    Category :{" "}
                    <span className="text-gray-900">
                      {ListingDetails?.category}
                    </span>
                  </p> */}
                  {/* <p className="text-sm">
                    Subscrption :{" "}
                    <span className="text-green-600">
                      {ListingDetails?.subscrption}
                    </span>
                  </p> */}
              
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">Update Status</p>
                    <select
                      onChange={(e) => setChangeStatus(e.target.value)}
                      id="status"
                      name="status"
                      className="w-1/2 h-7 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
                    >
                      <option value="">Select</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">InActive</option>
                    </select>
                    <button
                      onClick={() => UpdatedStatus(ListingDetails?._id)}
                      className="p-1 text-white bg-blue-500 rounded-sm text-sm ml-2"
                    >
                      Update
                    </button>
                  </div> */}

                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">Update subscrption</p>
                    <select
                      onChange={(e) => setSubscrption(e.target.value)}
                      id="status"
                      name="status"
                      className="w-1/2 h-7 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
                    >
                      <option value="">Select</option>
                      <option value="free">Free</option>
                      <option value="basic">Basic</option>
                      <option value="premium">Premium</option>
                      <option value="premiumpluse">Premium Pluse</option>
                    </select>
                    <button
                      onClick={() => UpdatedStatus(ListingDetails?._id)}
                      className="p-1 text-white bg-blue-500 rounded-sm text-sm ml-2"
                    >
                      Update
                    </button>
                  </div> */}

                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">Update Expiry Date</p>
                    <input
                      type="date"
                      className="w-1/2 h-7 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
                      min={minDate}
                      onChange={(e) => setMinDate(e.target.value)}
                    />
                    <button
                      onClick={() => UpdatedStatus(ListingDetails?._id)}
                      className="p-1 text-white bg-blue-500 rounded-sm text-sm ml-2"
                    >
                      Update
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <img
                  src={`${process.env.REACT_APP_API}/${ListingDetails?.image?.path}`}
                  alt={ListingDetails?.image?.path}
                  className="w-8/12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdsDetails;
