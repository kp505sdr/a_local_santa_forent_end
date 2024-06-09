import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Layout from "../../components/Dashboard/Layout";
import ReviewsTable from "../../components/Table/Reviews";

const Reviews = () => {
  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <ReviewsTable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
