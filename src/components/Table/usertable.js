import React from "react";

const UserTable = () => {
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full overflow-hidden py-3 pl-2">
        <div className="flex justify-between">
          <h3 className="text-xl">Your Recent Job Post</h3>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Job Post
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm leading-4 text-white tracking-wider">
                Request
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-gray-500">
              {/* <td className="px-6 whitespace-no-wrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td> */}
              <td className="flex items-center gap-x-2 px-6 py-5 whitespace-nowrap border-gray-500">
                <img
                  src="https://plus.unsplash.com/premium_photo-1712416361680-660f671cd797?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-5 h-5 rounded-full"
                />
                <div className="text-sm leading-5 text-blue-900">
                  Damilare Anjorin
                </div>
              </td>
              <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                $1234
              </td>
              <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                2024-02-25
              </td>
              <td className="px-6 whitespace-nowrap text-blue-900 border-gray-500 text-sm leading-5">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  />
                  <span className="relative text-xs">Free Ads</span>
                </span>
              </td>
              <td className="px-6 whitespace-nowrap text-blue-900 text-sm leading-5">
                <span className="relative inline-block px-3 py-1 border rounded-full font-semibold text-green-900 leading-tight">
                  <span
                    aria-hidden
                    className="absolute inset-0  opacity-50 rounded-full"
                  />
                  <span className="relative text-xs">View Request 1</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
          <div>
            <p className="text-sm leading-5 text-blue-700">
              Showing
              <span className="font-medium">1</span>
              to
              <span className="font-medium">200</span>
              of
              <span className="font-medium">2000</span>
              results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">
              <div>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  aria-label="Next"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  1
                </a>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  2
                </a>
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                >
                  3
                </a>
              </div>
              <div v-if="pagination.current_page < pagination.last_page">
                <a
                  href="#"
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  aria-label="Next"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserTable;
