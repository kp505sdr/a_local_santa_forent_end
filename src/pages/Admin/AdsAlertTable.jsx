
import React, { useState } from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
const AdsAlertTable = ({allAds}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 4; // Adjust this value as needed

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = allAds?.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
        <div className="flex item-center">
             <p>New Ads </p>
             {currentListings?.map((res)=>{
             
             })}
              <p className="ml-4 mt-1 text-center h-6 w-6 bg-red-600 rounded-full text-white">{allAds?.length}</p>
             </div>
      </div>
      <div className="align-middle bg-black inline-block min-w-full shadow overflow-hidden  shadow-dashboard rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
          <tr>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Ads ID
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Url
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Ads Type
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                 Price
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Payment ID
                </th>
                
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                  Action
                </th>
              </tr>
          </thead>
          <tbody className="bg-white">
         {currentListings?.map((res,i)=>(
           <tr key={i} className="border-b border-gray-500">
           <td className="px-6 py-3 whitespace-nowrap text-gray-900 border-gray-500 text-sm leading-5">
             {res?._id}
           </td>
           <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      <span className="text-red-600 mr-4 text-xs rounded-xs"> {res?.newAds?"New":""}</span>
                      </td>
           <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
             <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
               <span
                 aria-hidden
                 className="absolute inset-0 rounded-sm"
               />
               <a href={`${res?.url}`} target="_blank" className="relative text-xs cursor-pointer hover:text-blue-600">{res?.url}</a>
             </span>
           </td>
           <td className="px-6 whitespace-nowrap text-green-900 border-gray-500 text-sm leading-5">
             {res?.selectads}
           </td>
           <td className="px-6 whitespace-nowrap text-blue-500 border-gray-500 text-sm leading-5">
             ${res?.price}
           </td>
           <td className="px-6 whitespace-nowrap text-gray-900 border-gray-500 text-sm leading-5">
             {res?.txnId}
           </td>
           
           <td className="px-6 whitespace-nowrap text-green-900 border-gray-500 text-sm leading-5">
             {dateFormat(res?.createdAt, "mmmm d, yyyy")}
           </td>
           <td className="px-6 whitespace-nowrap text-red-900 border-gray-500 text-sm leading-5">
             {dateFormat(res?.expDate, "mmmm d, yyyy")}
           </td>
           <td className="px-6 text-left whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5 cursor-pointer">
             <div className="flex gap-x-2 justify-start items-center">
               <Link to={`/ads-details-data/${res?._id}`}>
                 <span className="text-blue-600 font-semibold">Click</span>
               </Link>
          

         
               {/* <button onClick={() => delethandle(res?._id)}>
                 <i className="text-red-500 hover:text-red-400 fas fa-trash-alt ml-4"></i>
               </button> */}
             </div>
           </td>
         </tr>
         ))}
          </tbody>
        </table>
      </div>
      <ul className="pagination mt-4">
        {allAds && allAds?.length > 0 && (
          <div className="flex justify-center">
            {/* Previous button */}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 border border-gray-400 text-gray-700 ${
                  currentPage === 1 ? "bg-gray-200" : " text-blue-500 "
                }`}
              >
                Previous
              </button>
            </li>

            {/* Pagination numbers */}
            {Array.from({
              length: Math.ceil(allAds?.length / listingsPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 border border-gray-400 text-gray-700 ${
                    index + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next button */}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(allAds?.length / listingsPerPage)
                }
                className={`px-3 py-1 border border-gray-400 text-gray-700 ${
                  currentPage === Math.ceil(allAds?.length / listingsPerPage)
                    ? "bg-gray-200"
                    : " text-blue-500"
                }`}
              >
                Next
              </button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default AdsAlertTable;
