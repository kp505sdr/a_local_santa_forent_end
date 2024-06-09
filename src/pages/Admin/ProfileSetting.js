import React from "react";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import Profilecard from "../../components/Dashboard/Profile";

const ProfileSetting = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
            <Profilecard />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProfileSetting;
