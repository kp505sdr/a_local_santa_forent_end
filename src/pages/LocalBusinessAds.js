import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import LikeAndComment from "../components/ListElement/LikeAndComment";
import axios from "axios";
import Tabmenu from "../components/Tabs/Tabmenu";

const LocalBusinessAds = () => {
  const [loading, setLoading] = useState(false);

  const [ListingData, setListingData] = useState([]);
  const [PopularBusinessAds, setPopularBusinessAds] = useState([]);

  useEffect(() => {
    getAllListingData();
  }, []);
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
            item?.category === "Local_Business_Ads") &&
          item?.status === "active"
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

      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: =>", error);
      setLoading(false);
    }
  };
  return (
    <Layout1 title="Local Business Listing">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Local Business Listing"
          buttonText="Create Listing"
          color={"bg-green-600"}
          children={
            <Tabmenu
              Popular={PopularBusinessAds}
              ListingData={ListingData}
              loading={loading}
            />
          }
        />
      </div>
    </Layout1>
  );
};
export default LocalBusinessAds;
