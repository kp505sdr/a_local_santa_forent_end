import React from "react";
import Layout1 from "../components/Layout/Layout1";
import ListContent from "../components/resuble";
import { Termandcondition } from "../Simple data";

const Termcondition = () => {
  return (
    <Layout1 title="Term Condition">
      <ListContent
        title="Terms and Conditions"
        description='Welcome to alocalsanta.com (hereinafter referred to as "the Website"), owned and operated by A Local Santa LLC (hereinafter referred to as "A Local Santa"). By accessing or using the Website, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms and conditions, you must not use the Website.'
        content={Termandcondition}
      />
    </Layout1>
  );
};

export default Termcondition;
