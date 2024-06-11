import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";
import axios from "axios";
import AdminAlertTable from "./AdminAlertTable";
import CommentAlertTable from "./CommentAlertTable";
import { ColorRing } from "react-loader-spinner";



const MailsAlert = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [allListing, setAllListing] = useState();
  const [allAds,setAllAds]=useState()
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    getAllListingData();
   
  }, []);

  const getAllListingData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/job/get`
      );
     
      const newdata=res?.data.filter(item => item?.newAds==true)
      setAllListing(newdata);
  
      setLoader(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoader(false);
    }
  };
// -------------------------comment---alerts--------------------
  // const getAllAds=async()=>{
  //   try {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_API}/api/v1/job/get`
  //     );
     
     
  //     const countComent=res?.data?.map((res)=>{
  //       return res.comments
  //     })
  //     const a=[[{name:"karan",isAdiminSeen:true},{name:"deepak",isAdiminSeen:true}],[{name:"rahul",isAdiminSeen:false},{name:"deepak",isAdiminSeen:true}],[{name:"mohan",isAdiminSeen:true},{name:"deepak",isAdiminSeen:true}]]
  //     const filterIsAdminSeenTrue= (countComent)=>{
  //       let result = [];
  //       countComent.forEach(subArray => {
  //         subArray.forEach(element => {
  //           if (element.isAdiminSeen === true) { // Corrected typo here
  //             result.push(element);
  //           }
  //         });
  //       });
  //       return result;
  //     }
      
  //     const data=filterIsAdminSeenTrue(countComent);
  //     console.log("data", data);
  //     console.log("my",countComent)
  //    console.log("a",a) 
  //     setAllAds()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-col w-full">
          <div className="w-full sm:px-4">
            <AdminAlertTable allListing={allListing}/>
            {/* <CommentAlertTable allAds={allAds}/> */}
            <p className="text-blue-600 p-2 font-semibold">
              {loader ? "Loading..." : ""}
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MailsAlert;
