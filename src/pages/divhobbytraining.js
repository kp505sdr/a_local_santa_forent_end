import React from "react";
import Layout1 from "../components/Layout/Layout1";
import LisitingTable from "../components/Card/LisitingTable";
import Tabmenu from "../components/Tabs/Tabmenu";
import { Link } from "react-router-dom";
import { LocalBusinessAds, LocalPosts } from "../Simple data";
import LikeAndComment from "../components/ListElement/LikeAndComment";

const Divhobbytraining = () => {
  return (
    <Layout1 title="Job, DIY, Hobby & Training">
      <div className="w-9/12 mx-auto mt-10">
        <LisitingTable
          titile="Job, DIY, Hobby & Training"
          buttonText="Create Listing"
          color={"bg-blue-600"}
          children={LocalPosts.map((itm) => (
            <LikeAndComment
              hrefLink={itm.link}
              title={itm.title}
              likeNo={itm.likeNo}
              CommentNo={itm.commentNo}
              ViewNo="5"
            />
          ))}
        />
      </div>
    </Layout1>
  );
};

export default Divhobbytraining;
