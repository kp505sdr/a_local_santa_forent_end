import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import { LocalBusinessAds, LocalPosts } from "../Simple data";
import LikeAndComment from "../components/ListElement/LikeAndComment";
import axios from "axios";
import Tabmenu from "../components/Tabs/Tabmenu";

const LocalTalks = () => {
  const [loading, setLoading] = useState(false);

  const [LocalTalks, setLocalTalks] = useState([]);
  const [PopularLocalTalks, setPopularLocalTalks] = useState([]);
  const [PopularLocalRental, setPopularLocalRental] = useState([]);
  const [LocalRentalsData, setLocalRentalsData] = useState([]);

  useEffect(() => {
    getAllListingData();
  }, []);
  const getAllListingData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );

      const FilterLocalTalksData = res?.data?.filter(
        (item) => item?.category === "Local Talks"
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: =>", error);
      setLoading(false);
    }
  };
  return (
    <Layout1 title="Local Talks">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Local Talks"
          buttonText="Create Listing"
          color={"bg-green-600"}
          children={
            <Tabmenu
              Popular={PopularLocalTalks}
              ListingData={LocalTalks}
              loading={loading}
            />
          }
        />
      </div>
    </Layout1>
  );
};
export default LocalTalks;
