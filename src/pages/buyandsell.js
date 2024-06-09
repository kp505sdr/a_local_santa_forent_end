import React from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import Tabmenu from "../components/Tabs/Tabmenu";
import { Link } from "react-router-dom";
import { LocalBusinessAds } from "../Simple data";

const Buyandsell = () => {
  return (
    <Layout1 title="List Buy & Sell">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="List Buy & Sell"
          buttonText="Create Listing"
          color={"bg-green-600"}
          children={
            <Tabmenu elem={LocalBusinessAds} elemPopular={LocalBusinessAds} />
          }
        />
      </div>
    </Layout1>
  );
};

export default Buyandsell;
