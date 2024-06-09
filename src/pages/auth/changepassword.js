import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/inputfield";

const ChangePsd = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const { newPassword, confPassword } = data;
      if (newPassword !== confPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      const alldata = { ...data, token: params?.token };
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/resetPassword`,
        alldata
      );
      if (res.data.message) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center w-full max-w-md mx-auto px-2 sm:px-0">
        <div className="w-full mx-1 rounded-md px-3 sm:px-0 shadow-md ">
          <h2 className="text-center font-semibold text-xl md:text-3xl pt-3">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5">
            <Input
              labeltext="New Password"
              type="password"
              name="newPassword"
              register={register}
            />
            <Input
              labeltext="Confirm Password"
              type="password"
              name="confPassword"
              register={register}
            />

            <div className="mx-auto">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePsd;
