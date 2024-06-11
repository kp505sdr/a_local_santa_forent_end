import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/inputfield";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import Layout1 from "../../components/Layout/Layout1";

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/login`,
        data
      );

      if (res?.data) {
        localStorage.setItem("UserInformation", JSON.stringify(res?.data));
        toast.success("login Successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log(res.data);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // -----------------------google-login-fun--------------------------------
    const handleGoogleLogin = async() => {
      window.location.href =`${process.env.REACT_APP_API}/api/v1/auth/login`;

};
// -------------------------google-login-success-fun---------------------------------------

  return (
    <Layout1 title="Login">
      <ToastContainer />
      <div className="mt-10 sm:mb-24">
        <div className="w-full md:w-1/3 md:m-auto mx-1 rounded-md px-3 sm:px-0 shadow-md  pb-10">
          <h2 className="text-center text-xl md:text-3xl font-semibold pt-3">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5">
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

            <div className="text-center pb-2">
              <Link
                to="/forget-password"
                className="text-blue-700 hover:text-blue-400"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="mx-auto">
              <button
                type="Submit"
                className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
              >
                Login
              </button>
            </div>
            {/* <div className="flex items-center justify-center my-4">
              <GoogleLogin
                clientId="422908320610-o916m3gohtij3844gilde1fo1tp49719.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <button
                    className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 shadow-2xl"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      className="w-6 h-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                    />
                    <span className="text-gray-600">Login with Google</span>
                  </button>
                )}
              />
            </div> */}

            <p className="text-sm font-light text-center  py-2 text-black">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline text-blue-700"
              >
                Register
              </Link>
            </p>
          </form>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg  hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span onClick={handleGoogleLogin}>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Register;
