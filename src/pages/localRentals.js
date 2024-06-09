import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import { LocalBusinessAds, LocalPosts } from "../Simple data";
import LikeAndComment from "../components/ListElement/LikeAndComment";
import axios from "axios";
import Tabmenu from "../components/Tabs/Tabmenu";

const LocalRentals = () => {
  const [loading, setLoading] = useState(false);

  const [ListingData, setListingData] = useState([]);
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

      const FilterLocalRentalsData = res?.data?.filter(
        (item) => item?.category === "Local rentals"
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

      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: =>", error);
      setLoading(false);
    }
  };
  return (
    <Layout1 title="Local Rentals">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Local Rentals"
          buttonText="Create Listing"
          color={"bg-green-600"}
          children={
            <Tabmenu
              Popular={PopularLocalRental}
              ListingData={LocalRentalsData}
              loading={loading}
            />
          }
        />
      </div>
    </Layout1>
  );
};
export default LocalRentals;
