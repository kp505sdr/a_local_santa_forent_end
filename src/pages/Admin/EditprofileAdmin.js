import React, { useEffect, useState } from "react";
import Layout from "../../components/Dashboard/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/Dashboard/Layout/adminlayout";

const EditprofileAdmin = () => {
  const [profilePic, setProfilePic] = useState([]);
  const [dbProfilePic, setDbProfilePic] = useState();
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [gender, setGender] = useState();
  const [facebook, setfacebook] = useState();
  const [youtube, setyoutube] = useState();
  const [linkedin, setlinkedin] = useState();
  const [x, setX] = useState();

  const userInfo = localStorage.getItem("UserInformation");
  const userdata = JSON.parse(userInfo);
  let token = userdata?.token;
  const Navigate = useNavigate();
  // -----------------call---api---------------------------

  useEffect(() => {
    getUserData();
  }, [token]);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/getsingle/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDbProfilePic(`${process.env.REACT_APP_API}/${res?.data?.profilePic}`);
      setName(res?.data?.name);
      setMobile(res?.data?.mobile);
      setGender(res?.data?.gender);
      setfacebook(res?.data?.socialMedia?.facebook);
      setyoutube(res?.data?.socialMedia?.youtube);
      setlinkedin(res?.data?.socialMedia?.linkedin);
      setX(res?.data?.socialMedia?.x);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // -----------------------------update----------------------------------------
  const UpdateUserData = async (updatedData) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/update/user/profile`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobile", mobile);
    formData.append("gender", gender);
    formData.append("facebook", facebook);
    formData.append("youtube", youtube);
    formData.append("linkedin", linkedin);
    formData.append("x", x);
    formData.append("profilePic", profilePic);

    UpdateUserData(formData);
    Navigate("/profile-details");
  };
  return (
    <AdminLayout>
      <div className="my-5">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-0 sm:px-4">
            {/* <CardLineChart /> */}

            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-2xl py-4 px-6 text-center font-bold uppercase">
                Profile
              </div>
              <form
                onSubmit={HandleSubmit}
                className="py-4 px-6"
                action
                method="POST"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 10))
                    }
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="date"
                  >
                    Gender
                  </label>
                  <div className="flex">
                    {" "}
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-125 "
                        type="radio"
                        checked={gender == "male" ? "checked" : ""}
                        name="sfg"
                        value="male"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <div class="title px-2">Male</div>
                    </label>
                    <label class="flex radio p-2 cursor-pointer">
                      <input
                        class="my-auto transform scale-125"
                        type="radio"
                        checked={gender == "female" ? "checked" : ""}
                        name="sfg"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <div class="title px-2">Female</div>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="social-media"
                  >
                    Social Media
                  </label>
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    value={facebook}
                    onChange={(e) => setfacebook(e.target.value)}
                    placeholder="facebook"
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="Linkdin"
                    value={linkedin}
                    onChange={(e) => setlinkedin(e.target.value)}
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="Youtube"
                    value={youtube}
                    onChange={(e) => setyoutube(e.target.value)}
                  />{" "}
                  <input
                    className="shadow appearance-none mb-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="X"
                    value={x}
                    onChange={(e) => setX(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="profile"
                  >
                    Profile Pic
                  </label>
                  {dbProfilePic && (
                    <img
                      src={dbProfilePic}
                      alt="profile"
                      className="h-16 w-16 text-center"
                    />
                  )}

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                    placeholder="Select Profile Picture"
                    onChange={(e) => {
                      const selectedFile = e.target.files[0];
                      setProfilePic(selectedFile);
                      setDbProfilePic(URL.createObjectURL(selectedFile));
                    }}
                  />
                </div>

                <div className="flex items-center justify-center mb-4">
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditprofileAdmin;
