import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/inputfield";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";

import RichTextEditor from "../inputfield/RichTextEditor";
import Apply from "./apply";
import CategorySelect from "./selectcategoryandsub";

const countries = [];

const options = [{}, {}];

const Businessform = () => {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
      setSearchResults([]);
    }
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("title", data.title);
    formData.append("description", data.description);

    try {
      const response = await axios.post(
        "http://localhost:4000/listings",
        formData
      );
      if (response.status === 200) {
        console.log("File uploaded successfully");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <CategorySelect />
      {/* <Apply /> */}
      {/* <form
        className="flex flex-col sm:w-2/3 mx-auto gap-3 px-4 my-5"
        onSubmit={handleSearch}
      >
        <div className="flex flex-col sm:flex-row w-full gap-y-2">
          <select
            id="pricingType"
            name="pricingType"
            className="w-full h-8 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            id="pricingType"
            name="pricingType"
            className="w-full h-8 border border-sky-500 focus:outline-none focus:border-sky-500 rounded px-2 md:px-3 py-0 md:py-0.5 tracking-wider"
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search ..."
            className="w-full px-3 h-8 rounded-l border border-sky-500 focus:outline-none focus:border-sky-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-700 text-white rounded-r px-2 md:px-3 py-0 md:py-0.5 whitespace-nowrap "
          >
            <i className="fa-solid fa-magnifying-glass mr-1"></i> Find
          </button>
        </div>
      </form> */}
      {/* <div className="bg-gradient-to-r  from-indigo-200 via-purple-200 to-teal-200 h-full md:h-screen md:flex ">
        <div className="w-11/12 sm:w-1/3 m-auto px-3 sm:px-0 shadow-2xl bg-green-border-dark-subtle ">
          <h2 className="text-center font-semibold text-xl md:text-3xl pt-3">
            Local Business form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5">
            <div className=" mx-auto p-2 w-full bg-slate-600 rounded-md shadow-lg mb-5">
              <h2 className="text-3xl font-semibold text-center mb-6 dark:text-white">
                File Upload
              </h2>
              <div className="relative border-2 border-dashed border-gray-300  rounded-md px-6 py-2 text-center">
                <input
                  type="file"
                  className="hidden"
                  {...register("file")}
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                  }}
                  id="fileInput"
                />
                <svg
                  className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-300 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  Choose file
                </label>{" "}
              </div>
            </div>
            <Input
              labeltext="Title"
              type="text"
              name="title"
              register={register}
            />

            <label htmlFor="description">Description:</label>
            <RichTextEditor name="description" control={control} />

            <div className="mx-auto">
              <button
                type="Submit"
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Businessform;
