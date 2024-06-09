import React, { useRef, useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import Userblog from "../../components/Dashboard/card/userblog";

const UserBloglist = () => {
  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <Userblog />
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
    </Layout>
  );
};

export default UserBloglist;
