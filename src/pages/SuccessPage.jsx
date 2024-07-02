

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const SuccessPage = () => {
//   const userInfo = localStorage.getItem("UserInformation");
//   const userdata = JSON.parse(userInfo);
//   let isAdmin=userdata?.user?.isAdmin


//     const Navigate=useNavigate()
//     const [paymentReceived, setPaymentReceived] = useState(true);
//     const [paymentDone, setPaymentDone] = useState();
//     const [loader, setLoader] = useState(false);



//         // Check if the URL contains the success parameter indicating a successful payment
//         const urlParams = new URLSearchParams(window.location.search);
//         const sessionId = urlParams.get('session_id');
//         const productId = urlParams.get('productId');
    

// // --------------------------------------------------------------------
// const CheckPayment = async (sessionId) => {
//    setLoader(true)
//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/checkpayment`, {
//       session_id: sessionId
//     });
//     setPaymentDone(response.data);

//   } catch (error) {
//     console.error('Error while processing payment:', error);
 
//   }
// };


// if (paymentReceived && sessionId) {
//   CheckPayment(sessionId); // Pass sessionId as an argument
//   setPaymentReceived(false)
// } 

// // --------------------------send email to client--------------------------------

// const SendEmailToClient=async(data)=>{
  
//   try {
//     const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/order-confirmation-mail`,{data});
//     setLoader(false)
//   } catch (error) {
//     console.error('Error while updating payment status', error);
//     setLoader(false)
//   }
// }
// // -------------------------------payment-update-------------------------
// let data={
//   payment_status:paymentDone?.payment_status,
//   txnId:paymentDone?.payment_intent,
//   paymentDate: Date.now()
// }

// const PaymentUpdateFun=async(data)=>{
//   try {
//     const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/paymentUpdate`,{data,productId});

//   setLoader(false)
//   SendEmailToClient(res.data)

//   if (isAdmin==true) {
//       Navigate("/listing")
//   } 
//   if (isAdmin==false) {
//       Navigate("/my-listing")
//     }
  


//   } catch (error) {
//     console.error('Error while updating payment status', error);
//     setLoader(false)
//   }
// }


// if(paymentDone?.payment_status=="paid"){
//   PaymentUpdateFun(data)
// }
// //  --------------------------------------------------------------------  
//     return (
//         <div>
      
//         <p className='text-md text-blue-600 font-semibold text-center mt-24'>{loader?"Please Wait payment in processing...":"Payment Successful"}</p>
                
  

//         </div>
//     );
// };

// export default SuccessPage;


// ---------------------------------------------------------------------------------

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  const isAdmin = userdata?.user?.isAdmin;

  const navigate = useNavigate();
  const [paymentDone, setPaymentDone] = useState();
  const [loader, setLoader] = useState(false);

  // Check if the URL contains the success parameter indicating a successful payment
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');
  const productId = urlParams.get('productId');

  //------------------------- Function to check payment--------------------------
  const checkPayment = async (sessionId) => {
    setLoader(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/checkpayment`, {
        session_id: sessionId
      });
      setPaymentDone(response.data);
    } catch (error) {
      console.error('Error while processing payment:', error);
      // Handle error here
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (!paymentDone && sessionId) {
      checkPayment(sessionId);
    }
  }, [sessionId, paymentDone]);

  //--------------------- Function to send email to client-----------------------------
  const sendEmailToClient = async (data) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/ads-order-mail-to-client`, { data });
      // Handle success if needed
   
    } catch (error) {
      console.error('Error while sending email to client:', error);
      // Handle error here
    }
  };

  //----------------------- Function to update payment-----------------------------------
  const paymentUpdateFun = async (data) => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/update-payment-status-ads`, { data, productId });
      sendEmailToClient(res.data);
     
      if (isAdmin) {
        navigate("/all-ads-view");
      } else {
        navigate("/ads");
      }
    } catch (error) {
      console.error('Error while updating payment status:', error);
      // Handle error here
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true)
    if (paymentDone?.payment_status === "paid") {

      let data={
        payment_status: paymentDone.payment_status,
        txnId: paymentDone.payment_intent,
        paymentDate: Date.now()
      }

      paymentUpdateFun(data);
    }
  }, [paymentDone]);

  return (
    <div>
      <p className='text-md text-blue-600 font-semibold text-center mt-24'>{loader ? "Please Wait payment in processing..." : "Payment Successful"}</p>
    </div>
  );
};

export default SuccessPage;
