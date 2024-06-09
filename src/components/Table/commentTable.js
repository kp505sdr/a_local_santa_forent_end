import React from "react";
import { Link } from "react-router-dom";

const CommentTable = ({allAds}) => {
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
        <div className="flex justify-between items-center">
          <div className=""> All Comments</div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden  shadow-dashboard rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
           
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Title
              </th>
              {/* <th className="px-3 py-3 text-left text-xs md:text-sm leading-4 tracking-wider cursor-pointer">
                <span className=" px-3 rounded-3xl">+10 View</span>
              </th> */}
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Comment Qty
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
         {allAds?.map((res)=>(
             <tr className="border-b border-gray-500">

             <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
           {res?._id}
             </td>{" "}
             <td className="flex items-center gap-x-2 px-6 py-5 whitespace-nowrap border-gray-500">
          
               <div className="text-xs md:text-sm leading-5 text-blue-900">
              {res?.title}
               </div>
             </td>
         
             <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
               <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                 <span aria-hidden className="absolute inset-0 " />
                 <span className="relative text-xs sm:text-sm ">{res?.comments?.length}</span>
               </span>
             </td>
             <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
               <Link
                 to={`/comments-view/${res?._id}`}
                 className="bg-yellow-300 px-2 py-1 rounded-md text-white"
               >
                 View
               </Link>
             </td>
         
           </tr>
         ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentTable;
