import React from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import Tabmenu from "../components/Tabs/Tabmenu";
import { Link } from "react-router-dom";
import { LocalBusinessAds, LocalPosts } from "../Simple data";
import LikeAndComment from "../components/ListElement/LikeAndComment";

const HealthandWellness = () => {
  return (
    <Layout1 title="Local Business Listing">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Health and Wellness"
          buttonText="Create Free ads"
          color={"bg-green-600"}
          children={
            <Tabmenu elem={LocalBusinessAds} elemPopular={LocalBusinessAds} />
          }
        />
      </div>
    </Layout1>
  );
};

export default HealthandWellness;
