import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import axios from "axios";
import Tabmenu from "../components/Tabs/Tabmenu";
import LisitingTable from "../components/Card/LisitingTable";

const LocalEventsMoives = () => {
  const [loading, setLoading] = useState(false);

  const [EventMovies, setEventMovies] = useState([]);
  const [PopularEventMovies, setPopularEventMovies] = useState([]);

  useEffect(() => {
    getAllListingData();
  }, []);

  const getAllListingData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
      const FilterEventMovies = res?.data?.filter(
        (item) => item?.category === "Local Events & Movies"
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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: =>", error);
      setLoading(false);
    }
  };

  return (
    <Layout1 title="Local Events & Moives">
      <div className="w-9/12 mx-auto mt-10">
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
        />
      </div>
    </Layout1>
  );
};

export default LocalEventsMoives;
