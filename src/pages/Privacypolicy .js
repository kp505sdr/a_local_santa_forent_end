import React from "react";
import Layout1 from "../components/Layout/Layout1";
import ListContent from "../components/resuble";
import { pricypolicy } from "../Simple data";

const Privacypolicy = () => {
  return (
    <Layout1 title="Privacy Policy">
      <ListContent
        title="Privacy Policy for AlocalSanta.com: Safeguarding Your Information"
        description={`At AlocalSanta.com, we prioritize the privacy and security of our users' personal information. Our Privacy Policy outlines how we collect, utilize, and disclose data when you engage with our platform or services.`}
        data={pricypolicy}
      />
    </Layout1>
  );
};

export default Privacypolicy;
