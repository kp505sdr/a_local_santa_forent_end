import React, { useRef, useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import JoditEditor from "jodit-react";

import imgIcon from "../../assets/photo.png";

const Myjobpost = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const [image, setImage] = useState([]);
  const editor = useRef(null);

  const [file, setFiles] = useState("");

  const contentFieldChanaged = (data) => {
    setDescription(data);
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
    setFiles([...files, ...newFiles]);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...image];
    updatedImages.splice(index, 1);
    setImage(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
  };
  return (
    <Layout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="w-full xl:w-8/10 mb-12 xl:mb-0 px-4"
          >
            {/* <CardLineChart /> */}
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
            <JoditEditor
              value={description}
              onChange={contentFieldChanaged}
              // config={config}
              ref={editor}
              className="block w-full text-xs sm:text-sm rounded-md mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              placeholder="Share your thoughts..."
              required
            />

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
                // value={image}
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
    </Layout>
  );
};

export default Myjobpost;
