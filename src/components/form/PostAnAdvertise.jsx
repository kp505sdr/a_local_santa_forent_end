import React, { useRef, useState } from "react";
import { Categories, citydata } from "../../Simple data";
import JoditEditor from "jodit-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import imgIcon from "../../assets/photo.png";
import useToggle from "../../hook/useToggle";
import Modal from "../modal";
import Clipboard from "../Clipboard/index";
import Sample1 from "../templete/sample1";
import { planFeatured } from "../../Simple data/index";
import Pricing from "../Pricing";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const PostAnAdvertise = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  let isAdmin=userdata?.user.isAdmin

  const negative = useNavigate();
  const {
    isModalOpen,
    setIsModalOpen,
    openModal,
    closeModal,
    isModalOpen1,
    setIsModalOpen1,
    openModal1,
    closeModal1,
    openModal2,
    closeModal2,
    isModalOpen2,
    setIsModalOpen2,
  } = useToggle();

  const [step, setStep] = useState(1);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [file, setFiles] = useState([]);
  const [loader, setLoader] = useState(false);
  const editor = useRef(null);

  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImageFile, setFeaturedImageFile] = useState([]);

  const handleImagefeatured = (e) => {
    const file = e.target.files;
    if (file[0].size > 250 * 1024) {
      alert("File size exceeds 250KB limit.");
      setFeaturedImage("");
    } else {
      setFeaturedImage(file[0]);
      setFeaturedImageFile(URL.createObjectURL(e.target.files[0]));
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const selectedFiles = Array.from(file).filter((fil) =>
      allowedTypes.includes(fil.type)
    );

    if (selectedFiles.length === 0) {
      alert("Please select a valid image file (JPEG,jpg, PNG, GIF).");
      setFeaturedImage("");
      return;
    }
  };

  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [url, setUrl] = useState("");
  
  const [tags, setTags] = useState([]);
  const [youTubetags, setYouTubeTags] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [youTube, setYouTube] = useState("");
  const [plan, setPlan] = useState([]);


  const handleInputKeyPress = (e) => {
    if (inputTag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, inputTag.trim()]);
      setInputTag("");
    }
  };

  const handleYouTubeInputKeyPress = (e) => {
    if (youTube.trim() !== "") {
      e.preventDefault();
      setYouTubeTags([...youTubetags, youTube.trim()]);
      setYouTube("");
    }
  };

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleYouTubeTagDelete = (index) => {
    const updatedImages = [...youTubetags];
    updatedImages.splice(index, 1);
    setYouTubeTags(updatedImages);
  };

  const maxSize = 250 * 1024; // 250KB

  const handleFileChange = (e) => {
    const files = e.target.files;
    const newUrls = [];
    const newFiles = [];

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const selectedFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (selectedFiles.length === 0) {
      // No valid image files selected
      alert("Please select a valid image file (JPEG, PNG, GIF).");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        alert("File size exceeds 250KB limit.");
      } else {
        newUrls.push(URL.createObjectURL(files[i]));
        newFiles.push(files[i]);
      }
    }

    if (image.length + newUrls.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }

    setImage([...image, ...newUrls]);

    // const filesdata = Array.from(e.target.files);
    // console.log(filesdata);
    setFiles([...files, ...newFiles]);
    // setFiles(filesdata);
  };

  const contentFieldChanaged = (data) => {
    setDescription(data);
  };

  const nextStep = () => {
    if (step === 1) {
      if (
        file &&
        // featuredImage
        category.trim() !== "" &&
        subCategory.trim() !== "" &&
        subCategory.trim() !== "" &&
        title.trim() !== "" &&
        city.trim() !== "" &&
        description.trim() !== ""
    
      ) {
        setStep((prevStep) => prevStep + 1);
       
      } else {
        toast.error("Please fill in all fields to post an advertisement.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    if (step === 2) {
      if (
        contactName.trim() === "" ||
        contactEmail.trim() === "" ||
        contactNumber.trim() === "" ||
        contactAddress.trim() === ""
      ) {
        toast.error("Please fill in all required fields for contact details.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      } else setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  const MakePayment=async(Product)=>{

    // pk_test_51P4OOD2NnZF6oUB1feHP6HE1Ein0W0iOClhZYNz4X5ZKbgmqYNIdiLZ61fZh7s6vynJ8eBSmaTlRVtFHbt3lVGJh00ItV7HYMu
    const stripe=await loadStripe("pk_test_51P4OOD2NnZF6oUB1feHP6HE1Ein0W0iOClhZYNz4X5ZKbgmqYNIdiLZ61fZh7s6vynJ8eBSmaTlRVtFHbt3lVGJh00ItV7HYMu")
    const body={
      products:Product
    }
    const headers={
      "Content-Type":"application/json"
    }
    const response=await fetch(`${process.env.REACT_APP_API}/api/v1/make/payment`,{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })
    const session=await response.json()
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })
   if(result.error){
    console.log(result.error)
   }
  }



  const postdata = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/job/create`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (isAdmin==true) {
        toast("Created Successfully!");
        setTimeout(() => {
          navigate("/listing")
        }, 1000);
      }
      if (isAdmin==false) {
        toast("Created Successfully!");
        setTimeout(() => {
          navigate("/my-listing")
        }, 1000);
      } 

    //   const postData=res.data
    //   const mydata=[{
    //     subscrption:postData?.subscrption,
    //     price:postData?.price,
    //     productId:postData?._id,
    //     qty:1,
    //   }]


      // if (postData?.subscrption=="free" && isAdmin==true) {
      //   toast("Created Successfully!");
      //   setTimeout(() => {
      //     navigate("/listing")
      //   }, 1000);
      // } else {

    //     toast.error(res?.data?.message);
    //   }

      // if (postData?.subscrption=="free" && isAdmin==false) {
      //   toast("Created Successfully!");
      //   setTimeout(() => {
      //     navigate("/my-listing")
      //   }, 1000);
      // } else {
    
    //     toast.error(res?.data?.message);
    //   }

    //  if(postData?.subscrption !=="free"){
    //   MakePayment(mydata)

    //  }

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Filter unique files
    const uniqueArray = file.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.id === obj.id && t.name === obj.name)
    );


    const files = uniqueArray;
  

    const formData = new FormData();
    formData.append("category,", category);
    formData.append("subCategory,", subCategory);
    formData.append("city,", city);
    formData.append("title,", title);
    formData.append("tags,", tags);
    formData.append("description,", description);
    formData.append("featuredImage", featuredImage);
    files.forEach((image, index) => {
      formData.append("files", image);
    });
    // formData.append("files", file);
    formData.append("youTubetags", youTubetags);
    formData.append("name,", contactName);
    formData.append("contactEmail,", contactEmail);
    formData.append("contactMobile,", contactNumber);
    formData.append("address,", contactAddress);
    formData.append("url,", url);
    formData.append("subscrption",plan.subscrption)
    formData.append("price",plan.price)
    
      postdata(formData);
     
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...image];
    updatedImages.splice(index, 1);
    setImage(updatedImages);
  };

  return (
    <div className="bg-white px-6 py-5 sm:py-10 lg:px-8 mb-10 sm:mb-5">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        setIsModalOpen={setIsModalOpen}
        children={<Clipboard children={<Sample1 />} />}
      />
      <Modal
        isOpen={isModalOpen1}
        onClose={closeModal1}
        setIsModalOpen={setIsModalOpen1}
        children={<Clipboard children={<Sample1 />} />}
      />
      <Modal
        isOpen={isModalOpen2}
        onClose={closeModal2}
        setIsModalOpen={setIsModalOpen2}
        children={<Clipboard children={<Sample1 />} />}
      />
      {step === 1 && (
        <>
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">
              Post An Advertise
            </h1>
         
          </div>

          <form onSubmit={handleSubmit} className="mx-auto my-5 max-w-xl ">
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 ">
              <span className="font-semibold">Category :</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full h-8 border rounded px-2 md:px-3 py-0 md:py-0.5 mt-1 tracking-wider text-xs sm:text-sm"
              >
                <option value="">Select Category</option>
                {Categories.map((cat) => (
                  <option key={cat.id} value={cat.value}>
                    {cat.category}
                  </option>
                ))}
              </select>
            </label>
            {category && (
              <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-2">
                <span className="font-semibold">Sub Category</span>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  required
                  className="w-full h-8 border rounded px-2 md:px-3 py-0 md:py-0.5 mt-1 tracking-wider text-xs sm:text-sm"
                >
                  <option value="">Select Subcategory</option>
                  {Categories.find(
                    (cat) => cat.value === category
                  )?.subcategory.map((subcatItem) => {
                    return (
                      <option key={subcatItem.id} value={subcatItem.subcat}>
                        {subcatItem.subcat}
                      </option>
                    );
                  })}
                </select>
              </label>
            )}
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-1">
              <span className="font-semibold"> Select City :</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full h-8 border rounded px-2 md:px-3 py-0 md:py-0.5 mt-1 tracking-wider text-xs sm:text-sm"
              >
                {citydata.map((cat) => {
                  return (
                    <option
                      key={cat.id}
                      value={cat.value}
                      className="text-black"
                    >
                      {cat.label}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Title :</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoComplete="organization"
                placeholder="Your title Name"
                className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              />
            </label>
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <div className="flex justify-between pb-1">
                <div>
                  <span className="font-semibold"> Description :</span>{" "}
                </div>
                <div className="mr-3">
                  <span
                    onClick={openModal}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-xs font-semibold text-white py-0.5 px-1 m-0.5 rounded-sm text-center"
                  >
                    Sample 1
                  </span>{" "}
                  <span
                    onClick={openModal1}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-xs font-semibold text-white py-0.5 px-1 m-0.5 rounded-sm text-center"
                  >
                    Sample 2
                  </span>
                  <span
                    onClick={openModal2}
                    className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-xs font-semibold text-white py-0.5 px-1 m-0.5 rounded-sm text-center"
                  >
                    Sample 3
                  </span>
                </div>
              </div>
              <JoditEditor
                value={description}
                onChange={contentFieldChanaged}
                // config={config}
                ref={editor}
                className="block w-full text-xs sm:text-sm rounded-md mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
                placeholder="Share your thoughts..."
                required
              />
            </label>
            <br />{" "}
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mb-2 w-full">
              <span className="font-semibold"> Add Tags :</span>
            </label>{" "}
            <div className="flex flex-wrap gap-2 pb-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-md px-3 py-1 text-gray-700 flex items-center"
                >
                  <span className="text-xs sm:text-sm">{tag}</span>
                  <button
                    className="ml-2 focus:outline-none text-red-500"
                    onClick={() => handleTagDelete(tag)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.586L5.879 16.707a1 1 0 1 1-1.414-1.414L8.586 11 4.464 6.879a1 1 0 0 1 1.414-1.414L10 9.586l4.121-4.121a1 1 0 1 1 1.414 1.414L11.414 11l4.121 4.121a1 1 0 0 1-1.414 1.414L10 12.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <div className="w-full flex items-center h-8 mt-1 rounded-r-md shadow-sm text-gray-900 overflow-hidden ">
                <input
                  type="text"
                  value={inputTag}
                  onChange={(e) => setInputTag(e.target.value)}
                  placeholder="Add a tag..."
                  className="block h-8 w-full text-xs sm:text-sm rounded-l-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
                />
                <button
                  className="bg-blue-500 py-2 rounded-r-md"
                  onClick={handleInputKeyPress}
                >
                  <i className="fa fa-plus text-white border-none p-1"></i>
                </button>
              </div>
            </div>
            {/* <div className="flex w-full items-center mt-3">
              <label className="block text-xs sm:text-sm leading-6 text-gray-900  w-full">
                <span className="font-semibold"> Featured Image :</span>
              </label>

              <div className="mx-auto flex flex-col items-center justify-center p-2">
                {featuredImageFile.length === 0 ? (
                  <p className="text-white dark:text-gray-200"></p>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    <div className="relative pb-2">
                      <img
                        src={featuredImageFile}
                        className="w-56 h-16 object-contain border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:text-gray-300 dark:focus:border-blue-500"
                        alt={`Image ${featuredImageFile}`}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-32 md:w-20 h-16">
                <input
                  type="file"
                  required
                  id="featuredInput"
                  onChange={handleImagefeatured}
                  className={`hidden`}
                />
                <label htmlFor="featuredInput">
                  <i className="fas fa-plus-circle text-teal-500 text-5xl"></i>
                </label>
              </div>
            </div> */}
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Add Images :</span>
            </label>
            <div className="mx-auto flex flex-col items-center justify-center p-2">
              {image.length === 0 ? (
                <p className="text-white dark:text-gray-200"></p>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {image.map((imageUrl, index) => (
                    <div key={index} className="relative pb-2">
                      <img
                        src={imageUrl}
                        className="w-11/12 h-16 object-contain border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:text-gray-300 dark:focus:border-blue-500"
                        alt={`Image ${index}`}
                      />
                      <button
                        onClick={() => handleImageDelete(index)}
                        className="absolute -top-4 right-0 w-5 h-5 flex items-center justify-center m-auto p-1 bg-red-500 text-white rounded-full"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex items-center justify-center mb-5 border-gray-300 rounded-full mx-auto w-20 h-20 sm:w-34 sm:h-34">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                required
                multiple
                id="fileInput"
                autoComplete="organization"
                placeholder="Your title Name"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-blue-500"
              >
                <img src={imgIcon} alt={imgIcon} className="w-full" />
              </label>
            </div>
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mb-2 w-full">
              <span className="font-semibold"> YouTube Url :</span>
            </label>{" "}
            <div className="flex flex-wrap gap-2 ">
              {youTubetags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-md px-3 py-1 text-gray-700 flex items-center"
                  >
                    <span
                      className="text-xs sm:text-sm"
                      style={{
                        color: tag.startsWith("http") ? "blue" : "inherit",
                      }}
                    >
                      <a href={tag} target="_blank" without rel="noreferrer">
                        {tag}
                      </a>
                      {/* {tag} */}
                    </span>
                    <button
                      className="ml-2 focus:outline-none text-red-500"
                      onClick={() => handleYouTubeTagDelete(tag)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.586L5.879 16.707a1 1 0 1 1-1.414-1.414L8.586 11 4.464 6.879a1 1 0 0 1 1.414-1.414L10 9.586l4.121-4.121a1 1 0 1 1 1.414 1.414L11.414 11l4.121 4.121a1 1 0 0 1-1.414 1.414L10 12.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
              <div className="w-full flex items-center border h-8 rounded-r-md mt-1 shadow-sm text-gray-900">
                {" "}
                <input
                  type="url"
                  value={youTube}
                  // onChange={(e) => {
                  //   const url = e.target.value;
                  //   if (url.startsWith("http")) {
                  //     setYouTube(url);
                  //   }
                  //   // else {
                  //   //   alert(
                  //   //     "This is not a valid URL. Please enter a URL starting with 'http'."
                  //   //   );
                  //   // }
                  // }}
                  onChange={(e) => setYouTube(e.target.value)}
                  placeholder="Add YouTube Url"
                  className="block h-8 w-full text-xs sm:text-sm rounded-l-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
                  // className="w-full text-xs sm:text-sm text-gray-900 border-transparent focus:border-transparent focus:ring-0 border-none"
                  style={{ color: url.startsWith("http") ? "blue" : "inherit" }}
                />
                <button
                  className="bg-blue-500 rounded-r-md py-1"
                  onClick={handleYouTubeInputKeyPress}
                >
                  <i className="fa fa-plus text-white border-none p-1"></i>
                </button>
              </div>
            </div>
            <div className="mx-auto flex justify-center mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
              >
                Next
              </button>
            </div>
          </form>
        </>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="mx-auto my-2 max-w-xl px-2">
          {" "}
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">
              Advertise User Details{" "}
            </h1>
          </div>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
            <span className="font-semibold">
              {" "}
              Name <strong className="text-red-500">*</strong>{" "}
            </span>
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
              autoComplete="organization"
              placeholder="Contact Person Name"
              className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
            />
          </label>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
            <span className="font-semibold">Number </span>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              autoComplete="organization"
              placeholder="Contact Mobile Number"
              className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
            />
          </label>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
            <span className="font-semibold">
              {" "}
              Email <strong className="text-red-500">*</strong>
            </span>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
              autoComplete="organization"
              placeholder="Contact Email"
              className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
            />
          </label>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3 mb-3">
            <span className="font-semibold">
              Contact Address <strong className="text-red-500">*</strong>
            </span>

            <textarea
              value={contactAddress}
              onChange={(e) => setContactAddress(e.target.value)}
              required
              name="address"
              id="address"
              rows={4}
              placeholder="Contact Full contactAddress"
              className="block w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              defaultValue={""}
            />
          </label>
          <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3 mb-4">
            <span className="font-semibold">Website Url</span>
            <input
              type="url"
              value={url}
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              style={{ color: url.startsWith("http") ? "blue" : "inherit" }}
              autoComplete="organization"
              placeholder="Your Product Url"
              className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
            />
          </label>
          <div className="mx-auto flex  gap-x-2 justify-center">
            <button
              onClick={prevStep}
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
            >
              <i className="fa fa-angle-double-left mr-1"></i>
              Previous
            </button>

            <button
              onClick={nextStep}
              className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
            >
              Next
            </button>
          </div>
        </form>
      )}
      {step === 3 && (
        <Pricing
          onSubmit={handleSubmit}
          setPlan={setPlan}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default PostAnAdvertise;
