import React, { useEffect, useState } from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import Tabmenu from "../components/Tabs/Tabmenu";

import axios from "axios";

const EntrepreneurialBusiness = () => {
  const [loading, setLoading] = useState(false);

  const [Entrepreneurial, setEntrepreneurial] = useState([]);
  const [PopularEntrepreneurial, setPopularEntrepreneurial] = useState([]);

  useEffect(() => {
    getAllListingData();
  }, []);
  const getAllListingData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );

      // ----------------------------------Entrepreneurial and Local Business listing----------------------------------
      const Entrepreneurial = res?.data?.filter(
        (item) =>
          item?.category === "Entrepreneurial and Local Business listing"
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
    <Layout1 title="Entrepreneurial and Local Business listing">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Entrepreneurial and Local Business listing"
          buttonText="Create Listing"
          color={"bg-green-600"}
          children={
            <Tabmenu
              Popular={PopularEntrepreneurial}
              ListingData={Entrepreneurial}
              loading={loading}
            />
          }
        />
      </div>
    </Layout1>
  );
};

export default EntrepreneurialBusiness;
