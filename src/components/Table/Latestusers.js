


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Latestuser = ({ allUser }) => {
  const path = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUser?.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allUser?.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden px-2 py-3">
        <div className="flex justify-between items-center">
          <div className="">
            {path.pathname == "/admin/allusers" ? "All Users" : "Latest Users"}
          </div>
          <div className="flex">
            {path.pathname == "/admin/allusers" ? (
              ""
            ) : (
              <Link
                to="/admin/allusers"
                className="inline-flex items-center justify-center px-3 py-1 text-xs font-sans font-semibold tracking-wide text-white bg-violet-500 hover:bg-violet-400 rounded-sm shadow-2xl"
              >
                View All Users
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden shadow-dashboard rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
           <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                S.N.
              </th>

              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Role
              </th>
              <th className="px-3 py-3  text-left text-xs md:text-sm leading-4 tracking-wider">
                Phone No.
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs md:text-sm leading-4 tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {path.pathname === "/admin"
              ? currentUsers?.map((res, i) =>
                  i < 5 ? (
                    <tr key={i} className="border-b border-gray-500">
                      <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                        {i + 1}
                      </td>{" "}
                      <td className="flex items-center text-center gap-x-2 px-6 py-5 whitespace-nowrap border-gray-500">
                        <img
                          src={
                            res.profilepic
                              ? res?.profilepic
                              : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                          }
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="text-xs text-center md:text-sm leading-5 text-blue-900">
                          {res?.name}
                        </div>
                      </td>
                      <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                        {res.isAdmin ? (
                          <span className="font-semibold text-blue-600">
                            Admin
                          </span>
                        ) : (
                          <span className="font-normal">User</span>
                        )}
                      </td>{" "}
                      <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                        {res?.mobile}
                      </td>
                      <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                        {res?.email}
                      </td>
                      <td className="px-6 text-left whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                        <Link to={`/user-details/${res?._id}`}>
                          <span className="text-left text-blue-600 font-semibold">
                            <i className="fas mr-2 fa-edit text-xl cursor-pointer hover:text-blue-400" />
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )
              : ""}

            {path.pathname === "/admin/allusers"
              ? currentUsers?.map((res, i) => (
                  <tr key={i} className="border-b border-gray-500">
                    <td className="px-6 whitespace-nowrap text-center text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                      {i + 1}
                    </td>{" "}
                    <td className="flex items-center text-center gap-x-2 px-6 py-5 whitespace-nowrap border-gray-500">
                      <img
                        src={
                          res.profilepic
                            ? res?.profilepic
                            : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
                        }
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="text-xs text-center md:text-sm leading-5 text-blue-900">
                        {res?.name}
                      </div>
                    </td>
                    <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                      {res.isAdmin ? (
                        <span className="font-semibold text-blue-600">
                          Admin
                        </span>
                      ) : (
                        <span className="font-normal">User</span>
                      )}
                    </td>{" "}
                    <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                      {res?.mobile}
                    </td>
                    <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                      {res?.email}
                    </td>
                    <td className="px-6 whitespace-nowrap text-left text-blue-900 border-gray-500 text-xs md:text-sm leading-5">
                      {res?.status}
                    </td>
                    <td className="px-6 text-left whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                      <Link to={`/user-details/${res?._id}`}>
                        <span className="text-left text-blue-600 font-semibold">
                          <i className="fas mr-2 fa-edit text-xl cursor-pointer hover:text-blue-400" />
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <nav className="inline-block">
          <ul className="flex">
            <li>
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-400 text-gray-700"
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"} px-3 py-1 border border-gray-400 text-gray-700`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-400 text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Latestuser;

