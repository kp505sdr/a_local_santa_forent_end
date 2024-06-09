import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/inputfield";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import Layout1 from "../../components/Layout/Layout1";

const Register = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        ` ${process.env.REACT_APP_API}/api/v1/user/registration`,
        data
      );
      dispatch(hideLoading());
      if (res.data.message) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Layout1 title="Register">
      <ToastContainer />
      <div className="mt-5 mb-24">
        <div className="w-full md:w-1/3 md:m-auto mx-1 rounded-md px-3 sm:px-0 shadow-md ">
          <h2 className="text-center font-semibold text-xl md:text-3xl pt-3">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5">
            <Input
              labeltext="First Name"
              type="text"
              name="name"
              register={register}
            />

            <Input
              labeltext="Email"
              type="email"
              name="email"
              register={register}
            />
            <Input
              labeltext="Password"
              type="password"
              name="password"
              register={register}
            />
            <Input
              labeltext="Confirm Password"
              type="password"
              name="confpassword"
              register={register}
            />

            <div className="text-center pb-2">
              <p className="">
                Already Have account?{" "}
                <Link to="/login" className="text-blue-700 hover:text-blue-400">
                  Login
                </Link>
              </p>
            </div>
            <div className="mx-auto">
              <button
                type="Submit"
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout1>
  );
};

export default Register;
