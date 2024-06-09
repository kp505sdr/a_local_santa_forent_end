import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";

import imgIcon from "../../assets/photo.png";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import Blogcard from "../../components/Dashboard/card/blogcard";
import axios from "axios";

const Bloglist = () => {
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <Blogcard />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Bloglist;
