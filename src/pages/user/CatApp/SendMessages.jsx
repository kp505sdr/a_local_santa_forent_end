import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Layout1 from "../../../components/Layout/Layout1";

const SendMessages = ({id,name,profilepic}) => {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chating, setChating] = useState();
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
      console.log("send response",response?.data?.conversation);
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
     setChating(response?.data);

     console.log("filterMessage user chating",filterMessage)
     console.log("ReceivedMessage",response)
   } catch (error) {
     console.error("Error fetching messages:", error);
   }
 };






// --------------------------------get------message-------------------------------
const getMessage = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get-message/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("get message",response);
    
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


  //   -------------------------------conversation----------------------------------------

//   const ChatingFun = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API}/api/v1/conversation/message`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const filterMessage = response?.data?.filter(
//         (item) => item?.receiverId === id
//       );
     
//       setChating(filterMessage)
//       console.log("filterMessage",filterMessage)
//     } catch (error) {
//       console.error("Error while geting message:", error);
//     }
//   };

  useEffect(() => {
  
    ReceivedMessages()
   
  }, [setChating]);

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
            <p className="text-gray-200 p-1 mt-1">{name}</p>
          </div>
          <div className="h-[19rem] overflow-y-auto">
          {/* {chating?.map((res)=>(
            <div className="p-2 m-2 bg-green-200 rounded-sm">
            <p className="text-end">{res?.message}</p>
          </div>
          ))} */}
             {chating?.map((res)=>(
            <div className={`p-2 m-2 ${res?.senderId==logUserId?"bg-green-200":"bg-white"}  rounded-sm`}>
            <p className={`${res?.senderId==logUserId?"text-end":"text-start"}`}>{res?.message}</p>
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
      {/* <div className="h-full">
        <div className="relative w-80 h-96 bg-gray-200 m-auto">
          <div className="flex item-center bg-teal-700">
            <img
              src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png"
              alt="img"
              className="p-1 mx-2 h-10 w-10"
            />
            <p className="text-gray-200 p-1 mt-1">karan sahani</p>
          </div>
        <div className="h-[19rem] bg-red-500 overflow-y-auto">
        <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-green-200 rounded-sm">
         <p className="text-end">hello</p>
         </div>
         <div className="p-2 m-2 bg-white rounded-sm">
         <p className="text-start">ky ho raha hai</p>
         </div>
        </div>
         <div className="flex item-center absolute inset-x-0 bottom-0">
         <input
            type="text"
            placeholder="Type your message..."
            className="w-full border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-md px-2 py-1 mr-4 text-white"
            onClick={sendMessage}
          >
          send
          </button>
         </div>
        </div>
      </div> */}
    </>
  );
};

export default SendMessages;
