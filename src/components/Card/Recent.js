import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "../Tabs/tabs";

const Recent = ({ titile, buttonText, color }) => {
  const [getItem, setGetItem] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data;
    setGetItem(data);
  };

  const handle = async () => {};

  return (
    <div className="border mx-2 border-slate-900 px-3">
      <div className="flex justify-between items-center py-3 mb-3">
        <div className="mx-auto">
          <h2 className="text-black text-2xl font-semibold">{titile}</h2>
        </div>
        {buttonText && (
          <div className={color}>
            <button className="inline-flex items-center justify-center py-1.5 px-3 rounded-md font-sans tracking-wide text-white text-sm font-normal">
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <Tabs>
          <Tab component="content of tab 1" active btnText="RealState">
            Recent
          </Tab>
          <Tab component="content of tab 2" btnText="RealState">
            Popular
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Recent;
