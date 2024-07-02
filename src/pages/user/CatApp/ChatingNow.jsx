// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Layout from '../../../components/Dashboard/Layout';
// import { io } from 'socket.io-client';
// const ChatingNow = () => {
//     const userInfo = localStorage.getItem("UserInformation");
//     const userdata = JSON.parse(userInfo);
//     let token = userdata?.token;
//     let logUserId=userdata?.user?._id
//     let {id}=useParams()
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState("");
//     const [user, setUser] = useState();
//     const [OnlineUsers,setOnlineUsers]=useState(null)

    

  


//     // ----------------------------send---message-----------------------------------
// const sendMessage = async () => {

//     const userInfo = localStorage.getItem("UserInformation");
//     const userdata = JSON.parse(userInfo);
//     let token = userdata?.token;

   
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/send-message/${id}`, //resceverId
//         { message },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
     
     
//       setMessage("");
//       fetchMessages();
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };


// //   ---------------------------conversation------------------------------

  
// const fetchMessages = async () => {
    
//    try {
    
//      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/received-message/${id}`,
//        {
//          headers: {
//            Authorization: `Bearer ${token}`,
//          },
//        }
//      );
//      const filterMessage=response?.data?.filter(item => item?.receiverId===id && item?.senderId===logUserId)
//      setMessages(response);
   
//    } catch (error) {
//      console.error("Error fetching messages:", error);
//    }
//  };


// //  -----------------user-image-----------------------------
// const getUserData = async () => {
 
//    try {
    
//      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/get/allusers`,
//        {
//          headers: {
//            Authorization: `Bearer ${token}`,
//          },
//        }
//      );

//    const userData=response?.data?.filter(item => item._id===id)
//    setUser(userData)
    
//    } catch (error) {
//      console.error("Error fetching messages:", error);
//    }
//  };


// // --------------------------------------socket-----------------------



// useEffect(() => {
//   if (token) {
//     const socket = io(`${process.env.REACT_APP_API}`, {
//       query: {
//         userId: logUserId,
//       },
//     });

//     socket.on("getOnlineUsers", (onlineUsers) => {
//       setOnlineUsers(onlineUsers);
//     });

//   }
// }, [token]);


// // -------------------------------------------------------------------------




//   useEffect(() => {
//     fetchMessages();
//     getUserData()

//   },[]);

//   return (
// <Layout>
// <div className="h-full bg-gray-300 my-3 ">
//         <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
   
//          <div className="flex item-center bg-teal-700">
//             {user?.map((res)=>(
//              <>
            
//                <img
//               src={`${res?.profilepic? res?.profilepic:"https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
//               alt="img"
//               className="p-1 mx-2 h-10 w-10 rounded-full"
//             />
//             <p className="text-gray-200 p-1 mt-1">{res?.name}</p>

//              </>
//             ))}
          
//           </div>
//           <div className="h-[33rem] overflow-y-auto">
//           {messages?.data?.map((res)=>(
//             <div className={`p-2 m-2 ${res?.senderId==logUserId?"bg-green-200":"bg-white"}  rounded-sm`}>
//             <p className={`${res?.senderId==logUserId?"text-end":"text-start"}`}>{res?.message}</p>
//           </div>
//           ))}
          
       
//           </div>
//           <div className="flex item-center absolute inset-x-0 bottom-0">
//             <input
//               type="text"
//               required
//               placeholder="Type your message..."
//               className="w-full border"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button
//               className="bg-blue-500 text-md px-2 py-1 text-white"
//               onClick={sendMessage}
//             >
//               Send
//             </button>
//           </div>
    
//         </div>
    
//     </div>
// </Layout>
//   )
// }

// export default ChatingNow


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Dashboard/Layout';
import { io } from 'socket.io-client';
import dateFormat from "dateformat"; 
const ChatingNow = () => {
    const userInfo = localStorage.getItem("UserInformation");
    const userdata = JSON.parse(userInfo);
    let token = userdata?.token;
    let logUserId = userdata?.user?._id;
    let { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();
    const [user, setUser] = useState();
    const [onlineUsers, setOnlineUsers] = useState(null);
    const [socket, setSocket] = useState(null);

    const [error, setError] = useState(null);

    // ----------------------------send---message-----------------------------------
    const sendMessage = async () => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/send-message/${id}`,
                { message },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage("");
            fetchMessages();
        } catch (error) {
            setError(error.response?.data?.message || "Error sending message");
        }
    };

    // ---------------------------conversation------------------------------
    const fetchMessages = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/received-message/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const filterMessage = response?.data?.filter(item => item?.receiverId === id && item?.senderId === logUserId)
            setMessages(response);
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching messages");
        }
    };

    // -----------------user-image-----------------------------
    const getUserData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/get/allusers`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const userData = response?.data?.filter(item => item._id === id)
            setUser(userData)
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching user data");
        }
    };

    // --------------------------------------socket-----------------------
    useEffect(() => {
        if (token && !socket) {
            const socket = io(`${process.env.REACT_APP_API}`, {
                query: {
                    userId: logUserId,
                },
            });

            socket.on("connect", () => {
                console.log("Socket connected");
            });

            socket.on("getOnlineUsers", (onlineUsers) => {
                setOnlineUsers(onlineUsers);
            });

            socket.on("error", (err) => {
                setError(err);
            });

            setSocket(socket);
        }

        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, [token, socket, logUserId]);

    // -------------------------------------------------------------------------
  //       const getRealTimeMessage=()=>{
  //         socket?.on("newMessage",(newMessage)=>{
  //           setMessages([...messages,newMessage])
  //         })
  //       }
  //  useEffect(()=>{
  //   getRealTimeMessage()
  //  },[socket,setMessages,messages,message])
  useEffect(() => {
    const getRealTimeMessage = (newMessage) => {
        setMessages([...messages,newMessage])
        fetchMessages()
    };

    
    

    if (socket) {
        socket.on("newMessage", getRealTimeMessage);
    }

    return () => {
        if (socket) {
            socket.off("newMessage", getRealTimeMessage);
        }
    };
}, [socket, setMessages]);







    useEffect(() => {
        fetchMessages();
        getUserData();
    }, []);
 
    return (
        <Layout>
            <div className="h-full bg-gray-300 my-3 ">
                <div className="relative w-80 h-[38rem] bg-gray-200 m-auto">
                    {error && <div className="text-red-500">{error}</div>}
                    <div className="flex item-center bg-teal-700">
                        {user?.map((res) => (
                            <>
                                <img
                                    src={`${res?.profilepic ? res?.profilepic : "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
                                    alt="img"
                                    className="p-1 mx-2 h-10 w-10 rounded-full"
                                />
                                <p className="text-gray-200 p-1 mt-1">{res?.name}</p>
                            </>
                        ))}
                    </div>
                    <div className="h-[33rem] overflow-y-auto">
                        {messages?.data?.map((res) => (
                            <div className={`p-2 m-2 ${res?.senderId == logUserId ? "bg-green-200" : "bg-white"}  rounded-sm`}>
                                <p className={`${res?.senderId == logUserId ? "text-end" : "text-start"}`}>{res?.message}
                                <p className="text-xs text-gray-400 mt-2">{dateFormat(res?.createdAt, " mmmm dS, yyyy")}</p>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex item-center absolute inset-x-0 bottom-0">
                        <input
                            type="text"
                            required
                            placeholder="Type your message..."
                            className="w-full border"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-md px-2 py-1 text-white"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ChatingNow;
