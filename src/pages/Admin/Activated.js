import React from "react";

import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const Activated = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-2 sm:px-4">
            Activated
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />

            <h2>CardBarChart</h2>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <h2>CardSocialTraffic</h2>
            <CardSocialTraffic />
          </div> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Activated;
