import React, { useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://news4u-1.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

function Update({
  name,
  email,
  password,
  setCategory,
  setname,
  setemail,
  setpassword,
  setcurrButton,
}) {
  const handleSubmit = async (e) => {
    console.log(email);
    e.preventDefault();
    try {
      const response = await instance.post(
        "/update",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log(data);
      setCategory("general");
      setcurrButton("general");
    } catch (error) {
      console.error("Update profile error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-center text-3xl block font-semibold">
          Update Profile
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label className="block text-base mb-2">Name</label>
            <input
              type="text"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600"
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <br />
          <div className="form group">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 "
              placeholder="Enter password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="border-2 border-black bg-blue-600 py-1 w-full rounded-md hover:bg-transparent font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
