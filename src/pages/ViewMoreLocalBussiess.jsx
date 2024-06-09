import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import { citydata } from "../Simple data";
import axios from "axios";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
const options = [
  { value: "", label: "Select Subcategory" },
  { value: "Local_Rentals", label: "Local Rentals" },
  { value: "Local_Business_Ads", label: "Local Business Ads" },
  { value: "Buy_Sell", label: "Buy - Sell" },
  { value: "Local_Talks", label: "Local Talks" },
  { value: "DIY_Hobby_&_Training", label: "DIY, Hobby & Training" },
  {
    value: "parenting_and_kids_education",
    label: "Parenting and Kids Education",
  },
  { value: "Local_Events_&_Movies", label: "Local Events & Movies" },
  { value: "Health_and_Wellness", label: "Health and Wellness" },
  {
    value: "Entrepreneurial_and_Local_Business_listing",
    label: "Entrepreneurial and Local Business Listing",
  },
  { value: "Local_Blog_Post", label: "Local Blog Post" },
  { value: "Places_To_Visit_locally", label: "Places To Visit Locally" },
];
const options1 = [
  { id: 1, value: "", subcat: "Select Subcategory" },
  {
    id: 1,
    value: " Retail Businesses",
    subcat: "Retail Businesses",
  },
  {
    id: 2,
    value: " Food and Beverage Businesses",
    subcat: " Food and Beverage Businesses",
  },
  {
    id: 3,
    value: "Service-Based Businesses",
    subcat: "Service-Based Businesses",
  },
  {
    id: 4,
    value: "Entertainment and Leisure Businesses",
    subcat: "Entertainment and Leisure Businesses",
  },
  {
    id: 5,
    value: "Hospitality Businesses",
    subcat: "Hospitality Businesses",
  },
  {
    id: 6,
    value: " Educational Institutions and Services",
    subcat: " Educational Institutions and Services",
  },
  {
    id: 7,
    value: "Retail and Specialty Shops",
    subcat: "Retail and Specialty Shops",
  },
  {
    id: 8,
    value: " Technology and Internet Businesses",
    subcat: " Technology and Internet Businesses",
  },
  {
    id: 9,
    value: "Financial Services",
    subcat: "Financial Services",
  },
  {
    id: 10,
    value: "Community and Nonprofit Organizations",
    subcat: "Community and Nonprofit Organizations",
  },
  { id: 11, value: "Others", subcat: "Others" },
];

const today = new Date();
const tenDaysAgo = new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000); // 10 days ago
const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
const aboveThirtyDaysAgo = new Date(
  today.getTime() - 10000 * 24 * 60 * 60 * 1000
); // 1000 days ago
const ViewMoreLocalBussiess = () => {
  const [ListingData, setListingData] = useState();
  const [loading, setLoading] = useState(false);
  const [Subcategory, setSubCategory] = useState("");
  const [City, setCity] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [selectDate, setSelectDate] = useState("");

  // ---------------------------listing-api-----------------------------

  useEffect(() => {
    setLoading(true);
    getAllListingData();
  }, [Subcategory, City, selectedAlphabet, selectDate]);
  const getAllListingData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
      const LocalBusiness = res?.data?.filter(
        (item) =>
          (item?.category === "Local Business Ads" ||
            item?.category === "Local_Business_Ads") &&
          item?.status === "active"
      );
      setListingData(LocalBusiness);
      setLoading(false);

      // -------------------filter-by---subcategory------------------------------

      if (Subcategory !== "") {
        const sortBySub = LocalBusiness?.filter(
          (res) => res?.subCategory === `${Subcategory}`
        );
        setListingData(sortBySub);

        //  -----------------------filter by-city----------------------------------------
        if (City !== "") {
          const sortByCity = sortBySub?.filter(
            (res) => res?.city === `${City}`
          );
          setListingData(sortByCity);
        }
      }
      //-----------------search by alphabet--------------------------------------

      if (selectedAlphabet !== "") {
        const filteredData = LocalBusiness?.filter((value) =>
          value.title.toLowerCase().includes(selectedAlphabet.toLowerCase())
        );

        setListingData(filteredData);
      }
      //  --------------------------search -------------by ---------------date---------------------

      if (!selectDate == "") {
        const tenDaysAgo = new Date(selectDate);
        tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

        // Filter data for entries created within the last 10 days
        const filteredByDate = LocalBusiness.filter(
          (rental) => new Date(rental.createdAt) > tenDaysAgo
        );

        // Sort the filtered data by createdAt in descending order
        filteredByDate.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Set the sorted and filtered data to your listing data
        setListingData(filteredByDate);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  // console.log("Subcategory", Subcategory);
  // console.log("city", City);
  // console.log("Listing data", ListingData);
  return (
    <Layout1 title="Details Blog">
      <form className="flex flex-col sm:w-2/3 mx-auto gap-3 px-4 my-5">
        <div className="flex flex-col sm:flex-row w-full gap-y-2">
          <select
            id="SubCategory"
            name="SubCategory"
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full h-8 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
          >
            {options1.map((option) => (
              <option key={option.value} value={option.value}>
                {option.subcat}
              </option>
            ))}
          </select>

          <select
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-8 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
          >
            {citydata.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search ..."
            className="w-full px-3 h-8 rounded-l border border-sky-500 focus:outline-none focus:border-sky-500"
            value={selectedAlphabet}
            onChange={(e) => setSelectedAlphabet(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-700 text-white rounded-r px-2 md:px-3 py-0 md:py-0.5 whitespace-nowrap "
          >
            <i className="fa-solid fa-magnifying-glass mr-1"></i> Find
          </button>
        </div>
      </form>
      {/* <hr className="border-b border-slate-700" /> */}

      {/* <div className="">{searchResults}</div> */}

      <div className="flex gap-x-2 justify-center py-1 sm:py-3">
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="duration"
            id="radio1"
            value={tenDaysAgo}
            onChange={(e) => setSelectDate(e.target.value)}
            className="text-xs sm:text-sm focus:ring-0 focus:border-none focus:outline-none"
          />
          <label htmlFor="radio1" className="text-xs sm:text-sm">
            10 Days
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="duration"
            id="radio2"
            value={thirtyDaysAgo}
            onChange={(e) => setSelectDate(e.target.value)}
            className="text-xs sm:text-sm focus:ring-0 focus:border-none focus:outline-none"
          />
          <label htmlFor="radio2" className="text-xs sm:text-sm">
            30 Days
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="radio"
            name="duration"
            id="radio2"
            value={aboveThirtyDaysAgo}
            onChange={(e) => setSelectDate(e.target.value)}
            className="text-xs sm:text-sm focus:ring-0 focus:border-none focus:outline-none"
          />
          <label htmlFor="radio2" className="text-xs sm:text-sm">
            Above 30 Days
          </label>
        </div>
      </div>

      <div className="pb-14 md:pb-20">
        <p className="p-1 text-md font-semibold text-blue-600">
          {loading ? "Loding..." : ""}
        </p>
        <p className="p-1 text-md text-center font-semibold text-red-600">
          {ListingData?.length <= 0 ? "No Data Found" : ""}
        </p>
        <div className="">
          <section className="mx-auto p-3 antialiased grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {ListingData?.map((res, i) => {
              return (
                <Link to={`/reviews-and-listing/${res._id}`}>
                  <article className="w-full flex gap-x-2 items-center sm:flex-wrap md:flex-nowrap shadow-lg shadow-teal-200 rounded-md mx-auto group cursor-pointer transform duration-500 hover:-translate-y-1">
                    <img className="w-1/2 sm:w-full h-44 sm:max-h-[200px] object-cover md:w-56" src={`${process.env.REACT_APP_API}/${res?.images[0]}`? `${process.env.REACT_APP_API}/${res?.images[0]}`: "https://res.cloudinary.com/dkmsgd3ua/image/upload/v1710358388/hym2mguczixkumd5u5vs.webp" } alt="blog image"/>
                    <div className="">
                      <div className="w-full sm:p-2">
                        <h1 className=" text-base sm:text-xl font-semibold text-gray-800 mt-1">
                          {res?.title?.length > 20
                            ? `${res?.title.substring(0, 25)}...`
                            : res?.title}
                        </h1>
                        <p
                          className="text-sm sm:text-base mt-0 sm:mt-2 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html:
                              res?.description?.length > 30
                                ? `${res?.description.substring(0, 30)}...`
                                : res?.description,
                          }}
                        ></p>
                        {/* {res?.description?.length > 30
                        ? `${res?.description.substring(0, 45)}...`
                        : res?.description} */}
                      </div>
                      <div className="w-full sm:p-2 flex  flex-col sm:flex-row justify-between">
                        <div className="sm:mt-3 text-gray-600 text-xs md:text-sm">
                          <p>
                            {" "}
                            <i
                              className="fa fa-calendar text-red-500 mr-2"
                              aria-hidden="true"
                            ></i>
                            {dateFormat(res?.createdAt, " mmmm dS, yyyy")}
                          </p>
                          <p>
                            <i className="fa fa-dollar text-teal-800 mr-2"></i>{" "}
                            {res?.subscrption}
                          </p>
                        </div>
                        <div className=" mt-1 sm:mt-3 text-gray-600 text-xs md:pl-6 md:text-sm">
                          <p>
                            {" "}
                            <i className="fas fa-map-marker-alt text-blue-500	mr-2"></i>{" "}
                            {res?.address?.length > 15
                              ? `${res?.address.substring(0, 25)}...`
                              : res?.address}
                          </p>
                          <p>
                            {" "}
                            <i className="fa fa-envelope text-cyan-600 mr-2"></i>
                            {res?.contactEmail}
                          </p>
                        </div>
                      </div>
                      <div className="text-base flex justify-between pr-2 sm:pr-0 sm:px-2 sm:justify-around gap-x-4 sm:gap-x-10 mt-1 w-full sm:max-w-52 mx-auto">
                        <p className="flex items-center gap-x-2">
                          <span>
                            <i className="fa-solid fa-heart text-sm sm:text-base md:text-xl text-red-500"></i>
                          </span>{" "}
                          <span className="text-xs sm:text-sm">
                            {" "}
                            {res?.likes?.length}
                          </span>
                        </p>

                        <p className="flex items-center gap-x-2">
                          <p className="flex items-center gap-x-1">
                            <span>
                              {" "}
                              <i className="fa-regular fa-comment text-sm sm:text-base md:text-xl text-teal-600"></i>
                            </span>{" "}
                            <span className="text-xs sm:text-sm">
                              {" "}
                              {res?.comments?.length}
                            </span>
                          </p>
                        </p>
                        <p className="flex items-center gap-x-1">
                          <span>
                            <i className="fa fa-eye text-sm sm:text-base md:text-xl text-blue-600 "></i>{" "}
                          </span>
                          <span className="text-xs sm:text-sm">
                            {" "}
                            {res?.views}
                          </span>
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </Layout1>
  );
};

export default ViewMoreLocalBussiess;
