import React, { useEffect, useState } from "react";
import imgIcon from "../../assets/photo.png";
import Layout from "../../components/Dashboard/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const UpdateBlogByAdmin = () => {
  const { id } = useParams();
  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const [image, setImage] = useState([]);
  const [file, setFiles] = useState([]); // Initialize as an array
  const [existingImages, setExistingImages] = useState([]);

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

    if (existingImages.length + newUrls.length > 4) {
      alert("You can upload a maximum of 4 images.");
      return;
    }
    setImage([...image, ...newUrls]);
    setFiles([...file, ...newFiles]);
  };

  const handleExistingImageDelete = (index) => {
    const updatedImages = [...existingImages];
    updatedImages.splice(index, 1);
    setExistingImages(updatedImages);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...image];
    updatedImages.splice(index, 1);
    setImage(updatedImages);

    const updatedFiles = [...file];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const getBlogData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/get-single-blogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setTitle(res?.data?.title);
      setDescription(res?.data?.blogsDetails);
      setExistingImages(res?.data?.images);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const UpdateBlog = async (BlogData) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/update-blogs/${id}`,
        BlogData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success(res?.data?.message);
        setTimeout(() => {
          navigate("/blogs");
        }, 800);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("blogsDetails", description);
    formData.append("existingImages", JSON.stringify(existingImages));
    file.forEach((image) => {
      formData.append("files", image);
    });

    try {
      await UpdateBlog(formData);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  if (Loading) {
    return <Spinner />;
  }
  return (
    <AdminLayout>
      <ToastContainer />
      <div className="my-5">
        <div className="flex flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="w-full xl:w-8/10 mb-12 xl:mb-0 px-4"
          >
            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Title :</span>
              <input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                required
                autoComplete="organization"
                placeholder="Your title Name"
                className="block h-8 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              />
            </label>

            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Description :</span>
              <textarea
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Write your Post....."
                className="block h-24 w-full text-xs sm:text-sm rounded-md border-0 px-3.5 py-2 mt-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6"
              />
            </label>

            <label className="block text-xs sm:text-sm leading-6 text-gray-900 mt-3">
              <span className="font-semibold"> Add Images :</span>
            </label>
            <div className="mx-auto flex flex-col items-center justify-center p-2">
              <div className="grid grid-cols-3 gap-4">
                {existingImages.map((image, index) => (
                  <div key={index} className="relative pb-2">
                    <img
                      src={`${process.env.REACT_APP_API}/${image.path}`}
                      alt={image.filename}
                      className="w-11/12 h-16 object-contain border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:text-gray-300 dark:focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleExistingImageDelete(index)}
                      className="absolute -top-4 right-0 w-5 h-5 flex items-center justify-center m-auto p-1 bg-red-500 text-white rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {image?.map((imageUrl, index) => (
                  <div key={index} className="relative pb-2">
                    <img
                      src={imageUrl}
                      className="w-11/12 h-16 object-contain border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:text-gray-300 dark:focus:border-blue-500"
                      alt={`Image ${index}`}
                    />
                    <button
                      type="button"
                      onClick={() => handleImageDelete(index)}
                      className="absolute -top-4 right-0 w-5 h-5 flex items-center justify-center m-auto p-1 bg-red-500 text-white rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center mb-5 border-gray-300 rounded-full mx-auto w-20 h-20 sm:w-34 sm:h-34">
              <input
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                multiple
                name="files"
                id="fileInput"
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
              Update Blog
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateBlogByAdmin;
