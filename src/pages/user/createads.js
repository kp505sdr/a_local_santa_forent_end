import React, { useRef, useState } from "react";
import imgIcon from "../../assets/photo.png";
import Layout from "../../components/Dashboard/Layout/index";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { loadStripe } from "react-stripe-js";
import Pricing from "../../components/Pricing";

const CreateAds = () => {
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;

  const [step, setStep] = useState(1);
  const [url, setUrl] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImageFile, setFeaturedImageFile] = useState(null);
  const [option, setOption] = useState();

  const [plan, setPlan] = useState([]);

  const handleImagefeatured = (e) => {
    const file = e.target.files[0];
    if (file.size > 250 * 1024) {
      alert("File size exceeds 250KB limit.");
      setFeaturedImage("");
    } else {
      setFeaturedImage(file);
      setFeaturedImageFile(URL.createObjectURL(file));
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please select a valid image file (JPEG, JPG, PNG, GIF).");
      setFeaturedImage("");
      setFeaturedImageFile(null);
    }
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const nextStep = () => {
    if (step === 1) {
      if (!featuredImage || url.trim() === "" || !option) {
        toast.error(
          "Please fill in both required fields for SponsoredAds details.",
          {
            position: "top-center",
            autoClose: 5000,
          }
        );
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  const MakePayment = async (Product) => {
    // pk_test_51P4OOD2NnZF6oUB1feHP6HE1Ein0W0iOClhZYNz4X5ZKbgmqYNIdiLZ61fZh7s6vynJ8eBSmaTlRVtFHbt3lVGJh00ItV7HYMu
    const stripe = await loadStripe(
      "pk_test_51P4OOD2NnZF6oUB1feHP6HE1Ein0W0iOClhZYNz4X5ZKbgmqYNIdiLZ61fZh7s6vynJ8eBSmaTlRVtFHbt3lVGJh00ItV7HYMu"
    );
    const body = {
      products: Product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      `${process.env.REACT_APP_API}/api/v1/make/payment`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("url", url);
    formData.append("files", featuredImage);
    formData.append("subscrption", plan.subscrption);
    formData.append("price", plan.price);
    formData.append("selectads", option);

    try {
      console.log(
        "Submitting to URL:",
        `${process.env.REACT_APP_API}/api/v1/create-ads`
      );
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/create-ads`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //   if (res.status === 201) {
      //     const mydata = [
      //       {
      //         subscription: plan.subscription,
      //         price: plan.price,
      //         productId: plan._id,
      //         qty: 1,
      //       },
      //     ];

      //     console.log(mydata);

      //     await MakePayment(mydata);
      //   }

      toast.success(res.data.message);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit ads. Please try again.");
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="my-5">
        <div className="flex flex-wrap">
          {step === 1 && (
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-5/10 mb-12 xl:mb-0 px-4"
            >
              <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
                <span className="font-semibold">Add Url:</span>
                <input
                  type="url"
                  value={url}
                  name="url"
                  onChange={(e) => setUrl(e.target.value)}
                  style={{ color: url.startsWith("http") ? "blue" : "inherit" }}
                  autoComplete="organization"
                  required
                  placeholder="Add Url ..."
                  className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
                />
              </label>

              <div className="w-full items-center mt-3">
                <label className="block text-xs sm:text-sm leading-6 text-gray-900 w-full">
                  <span className="font-semibold">Image:</span>
                </label>

                <div className="mx-auto flex flex-col items-center justify-center p-2">
                  {featuredImageFile ? (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="relative pb-2">
                        <img
                          src={featuredImageFile}
                          className="w-11/12 mx-auto h-16 object-contain border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:text-gray-300 dark:focus:border-blue-500"
                          alt="Selected"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="relative flex items-center justify-center mb-5 border-gray-300 rounded-full mx-auto w-20 h-20 sm:w-34 sm:h-34">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImagefeatured}
                    required
                    id="fileInput"
                    autoComplete="organization"
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-blue-500"
                  >
                    <img src={imgIcon} alt="Upload Icon" className="w-full" />
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="date"
                >
                  Select Ads
                </label>
                <div className="flex">
                  {" "}
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125 "
                      type="radio"
                      checked={option == "sponseredAds" ? "checked" : ""}
                      name="selectads"
                      value="sponseredAds"
                      onChange={(e) => setOption(e.target.value)}
                    />
                    <div className="title px-2">SponseredAds</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      className="my-auto transform scale-125"
                      type="radio"
                      checked={option == "fixedAds" ? "checked" : ""}
                      name="selectads"
                      value="fixedAds"
                      onChange={(e) => setOption(e.target.value)}
                    />
                    <div className="title px-2">Fixed Ads</div>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="flex items-center mx-auto justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px] my-4"
              >
                Next
              </button>
            </form>
          )}
        </div>
        {step === 2 && (
          <>
            {option === "sponseredAds" && (
              <div className="bg-yellow-300 w-full">
                <Pricing
                  onSubmit={handleSubmit}
                  setPlan={setPlan}
                  prevStep={prevStep}
                />
              </div>
            )}

            {option === "fixedAds" && (
              <div className="bg-red-300 w-full">
                <Pricing
                  onSubmit={handleSubmit}
                  setPlan={setPlan}
                  prevStep={prevStep}
                />
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default CreateAds;
