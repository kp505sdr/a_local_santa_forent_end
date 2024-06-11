import React from "react";
import dateFormat from "dateformat"; 
const Commentdata = ({allAds}) => {
  console.log("allAds comments",allAds)
  return (
   <>
   {allAds?.map((res)=>(

     <div className="bg-gray-100 p-1">
      <h2 className="text-lg font-bold mb-4">{res?.title}</h2>
      <h2 className="text-sm text-red-600 mb-4">{res?.comments?.length==0?"No any Comment!":""}</h2>
     <div className="flex flex-col space-y-4">
       {res?.comments?.map((res)=>(
         <div className="bg-white p-3 rounded-lg shadow-md">
    <div className="flex gap-3 items-center mr-2 mb-4">
    <img src={`${res.profilepic?res?.profilepic:"https://plus.unsplash.com/premium_photo-1711581103408-365c408b4d2e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}`} alt="img" className="object-cover w-12 h-12 rounded-full"/>
    <h3 className="text-lg font-bold">{res?.name}</h3>
  
    </div>
        
         <p className="text-gray-700 text-sm mb-2">{ dateFormat(res?.timestamp, " mmmm dS, yyyy")}</p>
         <p className="text-gray-700 ml-4">
        {res?.content}
         </p>
       </div>
       ))}
    
     </div>
   </div>

   ))}
   </>
   
   
  );
};

export default Commentdata;
