// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// const AllUsers = ({users,onlineUsers}) => {
// const [filteronlineUser,setfilteronlineUser]=useState()

//   // --------------filter-online user--------------
//   useEffect(()=>{
//   function filterData(users, onlineUsers) {
//     return users?.filter(item => onlineUsers.includes(item._id));
// }

//   const filteredData = filterData(users, onlineUsers);
//   setfilteronlineUser(filteredData)

  
// },[users])


//   return (
   
//     <div className="h-full ">
//         <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
//           <div className="flex items-center bg-teal-700">
          
//             <p className="text-gray-200 p-1 mt-1">All Users</p>
//           </div>
//           <div className="h-[36rem] overflow-y-auto">
//           {users?.map((res)=>(
//             <Link to={`/chating-now/${res?._id}`} className="flex items-center p-2 m-2 bg-green-200 rounded-sm">
//          {filteronlineUser?.map((resdata)=>resdata?._id===res?._id ?<span className='h-3 w-3 bg-green-600 rounded-full absolute -mt-9'></span>:"")}
//               <img
//               src={`${res?.profilepic? res?.profilepic: "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
//               alt="img"
//               className="h-10 w-10 rounded-full"
//             />
//             <p className="text-start ml-2">{res?.name}</p>
//           </Link>
//           ))}
           
//           </div>
      
//         </div>
//     </div>

//   )
// }

// export default AllUsers

// ------------------------------------------------------------


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const AllUsers = ({ users, onlineUsers }) => {
//   const userInfo = localStorage.getItem("UserInformation");
//   const userdata = JSON.parse(userInfo);
//   const token = userdata?.token;
//   const logUserId = userdata?.user?._id;

//   // State to keep track of unread messages count for each user
//   const [unreadMessagesCount, setUnreadMessagesCount] = useState({});
//   const [messages, setMessages] = useState([]);

//   // Fetch messages for a specific user
//   const fetchMessages = async (id) => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/received-message/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // Update state with response data
//       setMessages(prevMessages => [...prevMessages, { userId: id, data: response.data }]);
//     } catch (error) {
//       console.log(error.response?.data?.message || "Error fetching messages");
//     }
//   };

//   useEffect(() => {
//     // Fetch messages for each user
//     users?.forEach(user => {
//       fetchMessages(user._id);
//     });
//   }, [users]); // Only re-run the effect if users array changes

//   useEffect(() => {
//     // Calculate unread messages count when messages or users change
//     const unreadCounts = {};
    
//     messages.forEach(msg => {
//       const unreadCount = msg.data.filter(msgItem => msgItem.senderId === msg.userId && !msgItem.read).length;
//       unreadCounts[msg.userId] = unreadCount;
//     });
  
//     setUnreadMessagesCount(unreadCounts);
//   }, [messages]);
//    console.log("messages",messages)
//    console.log("unreadMessagesCount",unreadMessagesCount)
//   return (
//     <div className="h-full">
//       <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
//         <div className="flex items-center bg-teal-700">
//           <p className="text-gray-200 p-1 mt-1">All Users</p>
//         </div>
//         <div className="h-[36rem] overflow-y-auto">
//           {users?.map(res => (
//             <Link to={`/chating-now/${res?._id}`} key={res?._id} className="flex items-center p-2 m-2 bg-green-200 rounded-sm relative">
//               {onlineUsers.includes(res._id) && <span className='h-3 w-3 bg-green-600 rounded-full absolute -mt-9'></span>}
//               <img
//                 src={`${res?.profilepic ? res?.profilepic : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
//                 alt="img"
//                 className="h-10 w-10 rounded-full"
//               />
//               <p className="text-start ml-2">{res?.name}</p>
//               {unreadMessagesCount[res._id] > 0 && (
//                 <span className="bg-red-500 text-white text-xs px-1 ml-1 rounded-full">
//                   {unreadMessagesCount[res._id]}
//                 </span>
//               )}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;


// --------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllUsers = ({ users, onlineUsers }) => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  const token = userdata?.token;

  const [unreadMessagesCount, setUnreadMessagesCount] = useState({});
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async (userId) => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/received-message/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(prevMessages => [
          ...prevMessages,
          { userId: userId, data: response.data }
        ]);
      } catch (error) {
        console.error("Error fetching messages:", error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    if (users) {
      users.forEach(user => {
        fetchMessages(user._id);
      });
    }
  }, [users, token]);

  useEffect(() => {
    const unreadCounts = {};
    messages.forEach(msg => {
      const unreadCount = msg.data.filter(msgItem => msgItem.senderId === msg.userId && !msgItem.read).length;
      unreadCounts[msg.userId] = unreadCount;
    });
    setUnreadMessagesCount(unreadCounts);
  }, [messages]);

  const handleClickUser = (userId) => {
    // Simulate marking messages as read for the clicked user
    const updatedUnreadCounts = { ...unreadMessagesCount };
    updatedUnreadCounts[userId] = 0; // Mark as zero unread messages
    setUnreadMessagesCount(updatedUnreadCounts);
  };

  return (
    <div className="h-full">
      <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
        <div className="flex items-center bg-teal-700">
          <p className="text-gray-200 p-1 mt-1">All Users</p>
        </div>
        <div className="h-[36rem] overflow-y-auto">
          {loading && <p className="text-center py-2">Loading...</p>}
          {users && users.map(res => (
            <Link
              to={`/chating-now/${res?._id}`}
              key={res?._id}
              className="flex items-center p-2 m-2 bg-green-200 rounded-sm relative"
              onClick={() => handleClickUser(res._id)}
            >
              {onlineUsers.includes(res._id) && <span className='h-3 w-3 bg-green-600 rounded-full absolute -mt-9'></span>}
              <img
                src={res?.profilepic || "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
              <p className="text-start ml-2">{res?.name}</p>
              {unreadMessagesCount[res._id] > 0 && (
                <span className="bg-red-500 text-white text-xs px-1 ml-1 rounded-full">
                  {unreadMessagesCount[res._id]}
                </span>
              )}
            </Link>
          ))}
          {!loading && users && users.length === 0 && (
            <p className="text-center py-2">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
