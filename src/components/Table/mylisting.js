import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat"; 
const MylistingTable = ({ myListingData }) => {
  
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden py-3 pl-2">
        <div className="flex justify-between">
         <div><h3 className="text-xl">My Listing</h3></div>
          <div className="flex justify-between item-center font-semibold text-sm">
           <Link to="/active-userlisting" className="px-2 text-green-600 cursor-pointer">Active</Link>
           <Link to="/pending-userlisting" className="px-2 text-yellow-600 cursor-pointer">Pending</Link>
           <Link to="/inactive-userlisting" className="px-2 text-red-600 cursor-pointer">InActive</Link>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Views
              </th>
          
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
              Category
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
              City
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
              SubCategory
              </th>
              
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
              subscription
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
            {myListingData?.map((res, i) => (
              <tr key={i} className="border-b border-gray-500 ">
                <td className="px-6 py-3 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                  {res?.title}
                </td>
                <td
                  className={`px-6 whitespace-nowrap text-blue-900 ${
                    res.status == "active"? "text-green-900" : "text-red-900"
                  } border-gray-500 text-sm leading-5`}
                >
                  {res?.status}
                </td>
                <td
                  className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                >
                  {res?.views}
                </td>
                <td
                  className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                >
                  {res?.category}
                </td>
                <td
                  className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                >
                  {res?.city}
                </td>
                <td
                  className={` px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5`}
                >
                  {res?.subCategory}
                </td>
                
                <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-sm"
                    />
                    <span className="relative text-xs">{res?.subscrption}</span>
                  </span>
                </td>
                <td className="px-6 whitespace-nowrap text-green-900 border-gray-500 text-sm leading-5">
                 {dateFormat(res.subscription==="free"?res.createdAt:res.paymentDate , " mmmm d , yyyy")}
                </td>
                <td className="px-6 whitespace-nowrap text-red-900 border-gray-500 text-sm leading-5">
                {dateFormat(res?.expDate, " mmmm d , yyyy")}
                  
                </td>
                <td className="px-6 text-center whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5 cursor-pointer hover:bg-blue-100 ">
                  <Link to={`/reviews-and-listing/${res?._id}`}>
                    <span className="text-blue-600 font-semibold">Click</span>
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

export default MylistingTable;
