import React from "react";

import Latestuser from "../../components/Table/Latestusers";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const Userslist = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <Latestuser />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Userslist;
