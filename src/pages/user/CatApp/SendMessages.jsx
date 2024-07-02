import React, { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat"; 
import { useNavigate, useParams } from "react-router-dom";
import { io } from 'socket.io-client';
const SendMessages = ({id,name,profilepic}) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chating, setChating] = useState([]);
  const Navigate=useNavigate()


  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  let logUserId=userdata?.user?._id


  const sendMessage = async () => {
    if(!token){
        Navigate("/login")
    }
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
    
      ReceivedMessages()
      setMessage("");
    //   ChatingFun()
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

//   -----------------------------------------------------recevied-message---------------------------
const ReceivedMessages = async () => {
    var id=logUserId
   try {
    
     const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/received-message/${id}`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     
     const filterMessage=response?.data?.filter(item => item?.receiverId===id && item?.senderId===logUserId)
     const chatData=response?.data
     setChating(chatData);


   } catch (error) {
     console.error("Error fetching messages:", error);
   }
 };


// ---------------------------------------------------------
useEffect(() => {
  const getRealTimeMessage = (newMessage) => {
   
      setChating([...chating,newMessage])
      ReceivedMessages()
  };

  if (socket) {
      socket.on("newMessage", getRealTimeMessage);
  }

  return () => {
      if (socket) {
          socket.off("newMessage", getRealTimeMessage);
      }
  };
}, [socket,]);


// ----------------------socket io----------------------------------------------
useEffect(() => {
  if (token) {
    const socket = io(`${process.env.REACT_APP_API}`, {
      query: {
        userId: logUserId,
      },
    });

    socket.on("getOnlineUsers", (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });

    setSocket(socket);
  }
}, [token]);

// ----------------------------------------------------------------------------
  useEffect(() => {
  
    ReceivedMessages()
   
  }, []);


console.log("chating",chating)
  return (
    <>

<div className="h-full">
      <button
        className="bg-yellow-300 text-gray-800 px-1 py-0.5 rounded hover:bg-yellow-400"
        onClick={() => setIsOpen(!isOpen)}
      >
         {isOpen?"close now":"chat now"}
      </button>
      {isOpen && (
        <div className="relative w-80 h-96 bg-gray-200 m-auto">
          <div className="flex item-center bg-teal-700">
    

            <img
              src={`${profilepic? profilepic: "https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"}`}
              alt="img"
              className="p-1 mx-2 h-10 w-10 rounded-full"
            />
            <p className="text-gray-200 text-lg p-1 mt-1">{name}</p>
            <div>
            {onlineUsers?.map((res) => (
            <p className=" mt-2 ml-8 text-yellow-400">{res === id ? "online" : ""}</p>
               ))}
            </div>
          </div>
          
          <div className="h-[19rem] overflow-y-auto">
     
             {chating?.map((res)=>(
              
            <div className={`p-2 m-2 ${res?.senderId==logUserId?"bg-green-200":"bg-white"}  rounded-sm`}>
            <p className={`${res?.senderId==logUserId?"text-end":"text-start"}`}>{res?.message} 
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
      )}
    </div>
     
    </>
  );
};

export default SendMessages;



