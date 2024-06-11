import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Herosection";
import Recent from "../components/Card/Recent";
import axios from "axios";
import Moiveevent from "../components/Card/moive";
import LisitingTable from "../components/Card/LisitingTable";
import {
  training_placements,
  studentstalk,
  forum,
  spt,
  LocalPosts,
  creatormember,
} from "../Simple data";
import { Tab, Tabs } from "../components/Tabs/tabs";
import Visitvideo from "../components/VisitVideo";
import { Tab1, Tabs1 } from "../components/Tabs/tabs1";
import Blog from "../components/Blog";
import News from "../components/News";
import { Footer } from "../components/footer";
import BottomHeader from "../components/Top header/Bottomheader";
import Carosousel from "../components/Herosection/carosousel";
import Card from "../components/Card/card";
import Testimonials from "../components/Testimonials";
import Benefit from "../components/Benefit";
import LikeAndComment from "../components/ListElement/LikeAndComment";
import ChatNow from "../components/ChatNow";

import { LocalBusinessAds } from "../Simple data/index";
import Tabmenu from "../components/Tabs/Tabmenu";
import { Link, NavLink } from "react-router-dom";
import CardBlog from "../components/Card/CardBlog";
import ShowBlogs from "./ShowBlogs";

export const responsiveConfig = {
  400: {
    slidesPerView: 1,
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
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const responsiveConfig1 = {
  360: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const Home = () => {
  const [activeTabId, setActiveTabId] = useState(1); // Default active tab id is 1
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [ListingData, setListingData] = useState([]);
  const [PopularBusinessAds, setPopularBusinessAds] = useState([]);

  const [BuyAndSell, setBuyAndSaleData] = useState([]);
  const [PopularBuySell, setPopularBuySell] = useState([]);

  const [LocalRentalsData, setLocalRentalsData] = useState([]);
  const [PopularLocalRental, setPopularLocalRental] = useState([]);

  const [LocalTalks, setLocalTalks] = useState([]);
  const [PopularLocalTalks, setPopularLocalTalks] = useState([]);

  const [DIY, setDIY] = useState([]);
  const [PopularDIY, setPopularDIY] = useState([]);

  const [Kids, setKids] = useState([]);
  const [PopularKids, setPopularKids] = useState([]);

  const [EventMovies, setEventMovies] = useState([]);
  const [PopularEventMovies, setPopularEventMovies] = useState([]);

  const [Health, setHealth] = useState([]);
  const [PopularHealth, setPopularHealth] = useState([]);

  const [Entrepreneurial, setEntrepreneurial] = useState([]);
  const [PopularEntrepreneurial, setPopularEntrepreneurial] = useState([]);

  useEffect(() => {
   
    getAllBlogData();
    getAllListingData();
  
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
  // ----------------------call-listing------api------------------------

  const getAllListingData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );

      //  ----------------local bussiness-ads---------------------------
      const FilterLocalBusinessAdsData = res?.data?.filter(
        (item) =>
          (item?.category === "Local Business Ads" ||
            item?.category === "Local_Business_Ads") && item?.status === "active"
      );

      const recentAds = FilterLocalBusinessAdsData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setListingData(recentAds);
      const poluarBusinessArr = [];
      FilterLocalBusinessAdsData.forEach((item) => {
        poluarBusinessArr.push(item);
      });

      const heighestViews = poluarBusinessArr?.sort(
        (a, b) => b.views - a.views
      );
      setPopularBusinessAds(heighestViews);
      setLoading(false);

      // --------------------------------buy and sell---------------------------------------------------
      const FilterBuyAndSellData = res?.data?.filter(
        (item) =>
          item?.category === "Buy - Sell" || item?.category === "Buy-Sell" && item?.status === "active"
      );

      const recentBuySell = FilterBuyAndSellData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setBuyAndSaleData(recentBuySell);
      const popularBuySellArr = [];
      recentBuySell.forEach((item) => {
        popularBuySellArr.push(item);
      });

      const heighestViewsBuy = popularBuySellArr?.sort(
        (a, b) => b.views - a.views
      );

      setPopularBuySell(heighestViewsBuy);
      setLoading(false);

      //------------------------Local rentals----------------------------------

      const FilterLocalRentalsData = res?.data?.filter(
        (item) => item?.category === "Local rentals" && item?.status === "active"
      );

      const recentLocalRental = FilterLocalRentalsData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setLocalRentalsData(recentLocalRental);

      const popularLocalRental = [];
      recentLocalRental.forEach((item) => {
        popularLocalRental.push(item);
      });

      const heighestViewsLocalRental = popularLocalRental?.sort(
        (a, b) => b.views - a.views
      );

      setPopularLocalRental(heighestViewsLocalRental);
      setLoading(false);
      // ---------------------------Local Talks----------------------------------------------------

      const FilterLocalTalksData = res?.data?.filter(
        (item) => item?.category === "Local Talks" && item?.status === "active"
      );

      const recentLocalTalks = FilterLocalTalksData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setLocalTalks(recentLocalTalks);
      const popularLocalTalks = [];
      recentLocalTalks.forEach((item) => {
        popularLocalTalks.push(item);
      });

      const heighestViewsLocalTalks = popularLocalTalks?.sort(
        (a, b) => b.views - a.views
      );

      setPopularLocalTalks(heighestViewsLocalTalks);
      setLoading(false);
      // ----------------------------------------DIY,Hobby & Training----------------------------
      const FilterDIYData = res?.data?.filter(
        (item) => item?.category === "DIY,Hobby & Training" && item?.status === "active"
      );

      const recentDIY = FilterDIYData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setDIY(recentDIY);

      const popularDIY = [];
      recentDIY.forEach((item) => {
        popularDIY.push(item);
      });

      const heighestViewsDIY = popularDIY?.sort((a, b) => b.views - a.views);
      setPopularDIY(heighestViewsDIY);
      setLoading(false);

      // ------------------------------------Parenting and kid's education--------------------------
      const FilterKidsData = res?.data?.filter(
        (item) => item?.category === "Parenting and kid's education" && item?.status === "active"
      );

      const recentKids = FilterKidsData?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setKids(recentKids);

      const popularKids = [];
      recentKids.forEach((item) => {
        popularKids.push(item);
      });

      const heighestViewsKids = popularKids?.sort((a, b) => b.views - a.views);
      setPopularKids(heighestViewsKids);
      setLoading(false);

      // ----------------------------------------Local Events & Movies-----------------------------------
      const FilterEventMovies = res?.data?.filter(
        (item) => item?.category === "Local Events & Movies" && item?.status === "active"
      );

      const recentEventMovies = FilterEventMovies?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setEventMovies(recentEventMovies);
      const popularEventMovies = [];
      recentEventMovies.forEach((item) => {
        popularEventMovies.push(item);
      });

      const heighestEventMovies = popularEventMovies?.sort(
        (a, b) => b.views - a.views
      );
      setPopularEventMovies(heighestEventMovies);
      setLoading(false);

      // ----------------------------------------Health and Wellness---------------------------------------------------
      const FilterHealth = res?.data?.filter(
        (item) => item?.category === "Health and Wellness" && item?.status === "active"
      );

      const recentHealth = FilterHealth?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setHealth(recentHealth);
      const popularHealth = [];
      recentHealth.forEach((item) => {
        popularHealth.push(item);
      });

      const heighestHealth = popularHealth?.sort((a, b) => b.views - a.views);
      setPopularHealth(heighestHealth);
      setLoading(false);

      // ----------------------------------Entrepreneurial and Local Business listing----------------------------------
      const Entrepreneurial = res?.data?.filter(
        (item) =>
          item?.category === "Entrepreneurial and Local Business listing" && item?.status === "active"
      );

      const recentEntrepreneurial = Entrepreneurial?.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setEntrepreneurial(recentEntrepreneurial);
      const popularEntrepreneurial = [];
      recentEntrepreneurial.forEach((item) => {
        popularEntrepreneurial.push(item);
      });

      const heighestEntrepreneurial = popularEntrepreneurial?.sort(
        (a, b) => b.views - a.views
      );

      setPopularEntrepreneurial(heighestEntrepreneurial);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: =>", error);
      setLoading(false);
    }
  };

  return (
    <Layout titile="Alocalsanta">
      <div
        className="w-full h-full bg-[#f5f7fb]
          "
      >
        {/* <BottomHeader /> */}
        {/* <Hero /> */}
        {/* <Carosousel /> */}
        <div className="sm:flex justify-center gap-x-2 overflow-hidden">
          <div className="flex flex-col overflow-hidden">
            <div className="px-2">
              <div className="py-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Sponsered</h2>
              </div>
              <div className="w-full">
                <ChatNow responsiveConfig={responsiveConfig} text="Chat Now" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py- gap-y-4 h-full mt-5">
              {/* -------------Local Business Listing-------start---------------------------------- */}
              <LisitingTable
                titile=" Local Business Listing"
                buttonText="Create Listing"
                color={"bg-green-600"}
                children={
                  <Tabmenu
                    Popular={PopularBusinessAds}
                    ListingData={ListingData}
                    loading={loading}
                  />
                }
                viewmore={
                  ListingData?.length > 1 && (
                    <div className="h-3 m-3 p">
                      <Link
                        to="/view-more/LocalBussiess"
                        className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                      >
                        View More{" "}
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </Link>
                    </div>
                  )
                }
              />
              {/* ----------------------------------Local Rentals----start------------------------------------------- */}
              <LisitingTable
                titile=" Local Rentals"
                buttonText="Create Listing"
                color={"bg-green-600"}
                children={
                  <Tabmenu
                    Popular={PopularLocalRental}
                    ListingData={LocalRentalsData}
                    loading={loading}
                  />
                }
                viewmore={
                  ListingData?.length > 1 && (
                    <div className="h-3 m-3 p">
                      <Link
                        to="/view-more/LocalRental"
                        className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                      >
                        View More{" "}
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </Link>
                    </div>
                  )
                }
              />
              {/* ----------------------------------------------------------------------------------------- */}

              <LisitingTable
                titile="Local Talks"
                buttonText="Create Listing"
                color={"bg-blue-600"}
                children={
                  <Tabmenu
                    Popular={PopularLocalTalks}
                    ListingData={LocalTalks}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/LocalTalks"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />
              {/* only mobile device */}

              <div className="px-2 sm:hidden">
                <div className="py-4">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Sponsered
                  </h2>
                </div>
                <div className="w-full">
                  <ChatNow
                    responsiveConfig={responsiveConfig1}
                    text="Chat Now"
                    textSize="text-xs"
                  />
                </div>
              </div>

              <LisitingTable
                titile="List Buy & Sell"
                buttonText="Create Listing"
                color={"bg-green-600"}
                children={
                  <Tabmenu
                    Popular={PopularBuySell}
                    ListingData={BuyAndSell}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/BuySell"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />

              <LisitingTable
                titile="Job, DIY, Hobby & Training"
                buttonText="Create Listing"
                color={"bg-blue-600"}
                children={
                  <Tabmenu
                    Popular={PopularDIY}
                    ListingData={DIY}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/DIY"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />

              {/* <Moiveevent titile="National Events" /> */}

              {/* ------ */}
              {/* <LisitingTable
              titile="Local Posts"
              buttonText="Create Post"
              color={"bg-green-600"}
              children={
                <Tabs>
                  {training_placements.headText.map((item) => (
                    <Tab
                      key={item.id}
                      active={item.id === 1}
                      component={` ${item.heading}`}
                    >
                      {item.heading}
                    </Tab>
                  ))}
                </Tabs>
              }
            />
            <LisitingTable
              titile="Student's Talk"
              children={
                <Tabs>
                  {studentstalk.headText.map((item) => (
                    <Tab
                      key={item.id}
                      active={item.id === 1}
                      component={` ${item.heading}`}
                    >
                      {item.heading}
                    </Tab>
                  ))}
                </Tabs>
              }
            />
            <LisitingTable
              titile="Forum"
              children={
                <Tabs>
                  {forum.headText.map((item) => (
                    <Tab
                      key={item.id}
                      active={item.id === 1}
                      component={` ${item.heading}`}
                    >
                      {item.heading}
                    </Tab>
                  ))}
                </Tabs>
              }
            /> */}
            </div>
            <div className="px-2">
              <div className="py-4">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Recent Business Listing
                </h2>
              </div>
              <div className="w-full">
                <ChatNow
                  responsiveConfig={responsiveConfig1}
                  text="Chat Now"
                  textSize="text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 py- gap-y-4 h-full mt-5">
              <LisitingTable
                titile="Parenting & Kids Education"
                buttonText="Create Listing"
                color={"bg-green-600"}
                children={
                  <Tabmenu
                    Popular={PopularKids}
                    ListingData={Kids}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/Kids-education"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />
              <LisitingTable
                titile="Local Events & Moives"
                buttonText="Create Listing"
                color={"bg-blue-600"}
                children={
                  <Tabmenu
                    Popular={PopularEventMovies}
                    ListingData={EventMovies}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/EventMovies"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />

              {/* only mobile device */}

              <div className="px-2 sm:hidden">
                <div className="py-4">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Sponsered
                  </h2>
                </div>
                <div className="w-full">
                  <ChatNow
                    responsiveConfig={responsiveConfig1}
                    text="Chat Now"
                    textSize="text-xs"
                  />
                </div>
              </div>

              <LisitingTable
                titile="Health and Wellness"
                buttonText="Create Free ads"
                color={"bg-green-600"}
                children={
                  <Tabmenu
                    Popular={PopularHealth}
                    ListingData={Health}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/health-wellness"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />
              <LisitingTable
                titile="Entrepreneurial and Local Business listing"
                buttonText="Create Listing"
                color={"bg-blue-600"}
                children={
                  <Tabmenu
                    Popular={PopularEntrepreneurial}
                    ListingData={Entrepreneurial}
                    loading={loading}
                  />
                }
                viewmore={
                  // LocalBusinessAds.length > 4 && (
                  <div className="h-3 m-3 p">
                    <Link
                      to="/view-more/Entrepreneurial"
                      className="absolute bottom-1 right-1 text-xs sm:text-sm font-normal py-1 px-2 bg-teal-500 hover:bg-teal-400 text-white rounded-md "
                    >
                      View More{" "}
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </Link>
                  </div>
                  // )
                }
              />
            </div>

            <div className="px-2">
              <div className="py-4">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Facebook Ads
                </h2>
              </div>
              <div className="w-full">
                <ChatNow
                  responsiveConfig={responsiveConfig1}
                  text="Chat Now"
                  textSize="text-xs"
                />
              </div>
            </div>
          </div>
          <div className="h-64 bg-yellow-300 m-2 sm:m-0">
            <div className="w-32 sm:w-48 md:w-60">ads</div>
          </div>
        </div>
        <Visitvideo />
        <Testimonials />
        {/* creator blog memeber */}
        <div className="mx-auto py-10">
          <div className="flex flex-col justify-center items-center pb-5">
            <p className="text-xl sm:text-2xl font-semibold">Our Blogs</p>
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
        {/* <Benefit /> */}
      </div>
    </Layout>
  );
};

export default Home;
