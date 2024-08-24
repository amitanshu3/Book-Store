import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [redirect, setRedirect] = useState(false); // State for redirection
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://book-web-app-backend.onrender.com/api/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setRedirect(true); // Set redirect to true on successful signup
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("User already exists");
        }
      });
  };

  if (redirect) {
    return <Navigate to="/" />; // Redirect to home page
  }

  return (
    <div className="flex h-screen items-center justify-center flex-col ">
      <Link
        to="/"
        className="bg-red-600   text-white  mx-1/2 my-4 px-4 py-2 rounded-md hover:bg-pink-400 duration-300"
      >
        Back to Home
      </Link>
      <div className="border-[2px] shadow-md p-5 rounded-md">
        <div className="w-full">
          <h3 className="font-bold text-lg">Signup</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <span>Fullname</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-300"
              >
                Signup
              </button>
            </div>
          </form>
          <p>
            Already Registered?{" "}
            <button
              className="underline text-blue-500 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Signup;
