import React from "react";

const Commentdata = ({allAds}) => {
  console.log("allAds comments",allAds)
  return (
    <div className="bg-gray-100 p-1">
      <h2 className="text-lg font-bold mb-4">Product Name</h2>
      <div className="flex flex-col space-y-4">
       
      {allAds[0]?.comments?.map((res)=>(
         <div className="bg-white p-3 rounded-lg shadow-md">
         <h3 className="text-lg font-bold">{res?.name}</h3>
         <p className="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
         <p className="text-gray-700">
        {res?.content}
         </p>
       </div>
      ))}
      </div>
    </div>
  );
};

export default Commentdata;
