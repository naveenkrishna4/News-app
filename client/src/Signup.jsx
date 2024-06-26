import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://news4u-1.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

function Signup({ name, setname, email, setemail, password, setpassword }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    instance
      .post("/register", { name, email, password })
      .then((res) => {
        if (res.data === "No data") {
          window.alert("Please enter mandatory fields");
        } else if (res.data === "User already registered") {
          window.alert(res.data);
        } else {
          console.log(res);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-center text-3xl block font-semibold">Register</h1>
        <hr className="mt-3"></hr>
        <div className="mt-3">
          <label className="block text-base mb-2">Name</label>
          <input
            type="text"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600"
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
          ></input>
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="block text-base mb-2">
            Email address
          </label>
          <input
            type="email"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          ></input>
        </div>
        <div className="form group mt-3">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 "
            placeholder="Enter password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
        <div className="mt-4 ">
          <button
            type="submit"
            className="border-2 border-black bg-blue-600 py-1 w-full rounded-md hover:bg-transparent font-bold"
            onClick={handleClick}
          >
            Sign up
          </button>
        </div>
        <div className="mt-4 text-center">Already have an account</div>
        <div className="mt-2 justify-center">
          <Link
            to="/login"
            className="border-2 border-black bg-blue-600 py-1 w-full rounded-md hover:bg-transparent font-bold flex justify-center items-center"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
