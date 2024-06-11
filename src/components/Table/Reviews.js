// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const ReviewsTable = () => {
//   const userInfo = localStorage.getItem("UserInformation");
//   const userdata = JSON.parse(userInfo);
//   let token=userdata?.token
//   const [myListingData,setMyListingData]=useState()
//   const [loading,setLoading]=useState(false)


//   useEffect(() => {
//     setLoading(true)
//     getAllJobData();
//   }, []);

//   const getAllJobData = async () => {
//     try {
//       const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/job/get-allSelf-listing`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMyListingData(res?.data)
//       setLoading(false)


//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setLoading(false)
//     }}

//   return (
//     <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
//       <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
//         <div className="flex justify-between items-center">
//           <div className=""> All Reviews</div>
//           {/* <div className="flex">
//             <button className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-gray-400 hover:bg-gray-300  rounded-sm shadow-2xl">
//               Post New Listings
//             </button>

//             <button className="inline-flex items-center justify-center px-3 py-1 font-sans font-semibold tracking-wide text-white text-xs bg-violet-500 hover:bg-violet-400 rounded-sm shadow-2xl">
//               View All Listings
//             </button>
//           </div> */}
//         </div>
//       </div>
//       <div className="align-middle inline-block min-w-full shadow overflow-hidden  shadow-dashboard rounded-bl-lg rounded-br-lg">
//         <table className="min-w-full">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
//                 S.N.
//               </th>

//               <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
//                 Title
//               </th>

//               <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
//                 Views
//               </th>
//               <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
//                 <Link to="">Details</Link>
//               </th>
//             </tr>
//           </thead>
//           <p className="text-blue-500 font-semibold">{loading?"Loading...":""}</p>
//           <tbody className="bg-white">
//             {myListingData?.map((res,i)=>(
//                <tr className="border-b border-gray-500">
//                <td className="px-6 whitespace-no-wrap">{i+1}</td>
 
//                <td className="flex items-center gap-x-2 px-6 py-5 whitespace-nowrap border-gray-500">
//                  <div className="text-xs md:text-sm leading-5 text-blue-900">
//                  {res?.title}
//                  </div>
//                </td>
           
//                <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
//                  <span className=" text-xs sm:text-sm w-2 h-2 p-1 mr-2">
//                    {res?.views}
//                  </span>
                
//                </td>
//                <td className="px-6 whitespace-nowrap text-blue-500 border-gray-500 text-xs md:text-sm leading-5">
//                  <Link to={`/reviews-and-listing/${res._id}`}> Details </Link>
//                </td>
//                {/* <td className="px-6 whitespace-no-wrap text-blue-900 text-xs md:text-sm leading-5">
//                  <button className="px-5 py-2 border text-blue-500 rounded-full transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none whitespace-nowrap">
//                    View Request 1
//                  </button>
//                </td> */}
//              </tr>
//             ))}
          
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ReviewsTable;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewsTable = ({allAds}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 8; // Adjust this value as needed

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
                Reviews Qty
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
         {currentListings?.map((res)=>(
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
                 <span className="relative text-xs sm:text-sm ">{res?.reviews?.length}</span>
               </span>
             </td>
             <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
               <Link
                 to={`/reviews-view/${res._id}`}
                 className="bg-orange-500 px-2 py-1 rounded-md text-white"
               >
                 View
               </Link>
             </td>
             <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
               <Link
                 to={`/listing-ads-update/${res?._id}`}
                 className="bg-blue-600 text-white px-2 py-1 rounded-md text-white"
               >
                 Click
               </Link>
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

export default ReviewsTable;

