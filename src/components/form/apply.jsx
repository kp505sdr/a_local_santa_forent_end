import React from "react";
import Makepayment from "./makepayment";
import RichTextEditor from "../inputfield/RichTextEditor";
import { useForm } from "react-hook-form";
import axios from "axios";

const Apply = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("file", data.file[0]);
    // formData.append("title", data.title);
    // formData.append("description", data.description);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/listings",
    //     formData
    //   );
    //   if (response.status === 200) {
    //     console.log("File uploaded successfully");
    //   } else {
    //     console.error("Failed to upload file");
    //   }
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    // }
  };

  return (
    <div className="bg-white px-6 py-12 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Post An Advertise
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Feature request? Suggestion? or maybe you'd like to be our critic!
          Here's a form just for that.
        </p>
      </div>
      <form
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="title"
                {...register("title")}
                autoComplete="organization"
                placeholder="Your title Name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            {/* <div className="mt-2.5">
              <textarea
                name="description"
                id="description"
                rows={4}
                placeholder="Share your thoughts..."
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div> */}

            <RichTextEditor name="description" control={control} />
          </div>
          {/* Make your Ad Premium */}

          {/* <Makepayment /> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-sm py-2 w-full block"
          >
            Submit →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
