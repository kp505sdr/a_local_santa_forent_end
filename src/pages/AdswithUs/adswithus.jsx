import React from "react";
import Layout1 from "../../components/Layout/Layout1";
import ListContent from "../../components/resuble";
import { content } from "../../Simple data";

const AdswithUs = () => {
  return (
    <Layout1 title=" Ads with us">
      <ListContent title="Advertise with Us" content={content} />
    </Layout1>
  );
};

export default AdswithUs;
