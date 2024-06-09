

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SuccessPage = () => {
    const Navigate=useNavigate()
    const [paymentReceived, setPaymentReceived] = useState(true);
    const [paymentDone, setPaymentDone] = useState();
    const [loader, setLoader] = useState(false);



        // Check if the URL contains the success parameter indicating a successful payment
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');
        const productId = urlParams.get('productId');
    

// --------------------------------------------------------------------
const CheckPayment = async (sessionId) => {
   setLoader(true)
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/checkpayment`, {
      session_id: sessionId
    });
    setPaymentDone(response.data);

  } catch (error) {
    console.error('Error while processing payment:', error);
 
  }
};


if (paymentReceived && sessionId) {
  CheckPayment(sessionId); // Pass sessionId as an argument
  setPaymentReceived(false)
} 

// --------------------------send email to client--------------------------------

const SendEmailToClient=async(data)=>{
  
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/order-confirmation-mail`,{data});

  } catch (error) {
    console.error('Error while updating payment status', error);
    setLoader(false)
  }
}
// -------------------------------payment-update-------------------------
let data={
  payment_status:paymentDone?.payment_status,
  txnId:paymentDone?.payment_intent,
  paymentDate: Date.now()
}

const PaymentUpdateFun=async(data)=>{
  try {
    const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/paymentUpdate`,{data,productId});
  console.log("Update Payment Status",res)
  setLoader(false)
  SendEmailToClient(res.data)
  Navigate("/my-listing")
  } catch (error) {
    console.error('Error while updating payment status', error);
    setLoader(false)
  }
}


if(paymentDone?.payment_status==="paid"){

  PaymentUpdateFun(data)
}else{
  console.log("Payment Status ",paymentDone?.payment_status)
}
//  --------------------------------------------------------------------  
    return (
        <div>
      
        <p className='text-md text-blue-600 font-semibold text-center mt-24'>{loader?"Please Wait payment in processing...":"Payment Successful"}</p>
                
  

        </div>
    );
};

export default SuccessPage;
