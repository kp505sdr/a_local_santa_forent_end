import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

import imgIcon from "../../assets/photo.png";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const SponseredAds = () => {
  const [Url, setUrl] = useState("");

  const [image, setImage] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file");
  };
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-5/10 mb-12 xl:mb-0 px-4"
          >
            {/* <CardLineChart /> */}
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Add Url :</span>
              <input
                type="text"
                value={Url}
                onChange={(e) => setUrl(e.target.value)}
                required
                autoComplete="organization"
                placeholder="Add Url ..."
                className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              />
            </label>

            <div className=" w-full items-center mt-3">
              <label className="block text-xs sm:text-sm leading-6 text-gray-900  w-full">
                <span className="font-semibold"> Image :</span>
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
              <div className="relative flex items-center justify-center mb-5 border-gray-300 rounded-full mx-auto w-20 h-20 sm:w-34 sm:h-34">
                <input
                  type="file"
                  className="hidden"
                  // value={image}
                  onChange={handleImagefeatured}
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
            </div>

            <button
              type="submit"
              className="flex items-center mx-auto justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px] my-4"
            >
              Submit
            </button>
          </form>
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SponseredAds;
