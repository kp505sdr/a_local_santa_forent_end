import React from "react";
import CardStats from "../Card/cardstart";
import { Link } from "react-router-dom";
import Blog from "../../assets/icon/Blogs -  alocalsanta.com.png";
import Commenticon from "../../assets/icon/Comments -  alocalsanta.com.png";
import Fixedads from "../../assets/icon/Fixed Ads -  alocalsanta.com.png";
import Listings from "../../assets/icon/Listings -  alocalsanta.com.png";
import Livechat from "../../assets/icon/Live Chat -  alocalsanta.com.png";
import Reviews from "../../assets/icon/Reviews -  alocalsanta.com.png";
import SponseredAds from "../../assets/icon/Sponsered Ads -alocalsanta.com.png";
import MailsAlert from "../../assets/icon/alert-50.png";

export default function AdminHeaderStats({
  allListing,
  allUser,
  newListing,
  allBlog,
  allComment,
  allReviews,
  loader,
}) {
  return (
    <>
      {/* Header */}
      <div className="relative md:py-10">
        <div className="mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-5">
              <Link to="/listing">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Listings"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        allListing?.length
                      )
                    }
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    image={Listings}
                    statIconColor="bg-orange-500"
                  />
                </div>
              </Link>
              <Link to="/comments">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Comments"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        allComment
                      )
                    }
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    image={Commenticon}
                    statIconColor="bg-green-500"
                  />
                </div>
              </Link>
              <Link to="/admin-reviews">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Reviews"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        allReviews
                      )
                    }
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    image={Reviews}
                    statIconColor="bg-green-500"
                  />
                </div>
              </Link>
              <Link to="/blogs">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Blogs"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        allBlog?.length
                      )
                    }
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    image={Blog}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>
              <Link to="/sponsored-all-ads">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Spansored Ads"
                    statTitle="924"
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    image={SponseredAds}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>
              <Link to="/fixed-ads">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Fixed Ads"
                    statTitle="10563"
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    image={Fixedads}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>
              <Link to="/admin/allusers">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="All Users"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        allUser?.length
                      )
                    }
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    image={Livechat}
                    statIconColor="bg-yellow-500"
                  />
                </div>
              </Link>
              <Link to="/mails-alerts">
                <div className="w-full sm:px-4">
                  <CardStats
                    statSubtitle="Mails & Alerts"
                    statTitle={
                      loader ? (
                        <b className="text-blue-600 p-1 text-xs">Loading...</b>
                      ) : (
                        newListing?.length
                      )
                    }
                    statArrow="up"
                    statPercent="12"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    image={MailsAlert}
                    statIconColor="bg-orange-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
