import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Navigationbar({ setCategory }) {
  const navigate = useNavigate();
  const [Profile, setProfile] = useState(false);
  const [currButton, setcurrButton] = useState("general");

  const handleLogout = () => {
    navigate("/register");
  };

  const profile = () => {
    setProfile(true);
    <Profile />;
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <div className="bg-red-500 rounded p-1 flex items-center justify-center mr-3">
              <span className="text-white font-bold px-2">News4U</span>
            </div>
            <div
              className="hidden lg:flex lg:items-center lg:w-auto"
              id="navbarNav"
            >
              <ul className="flex list-none mr-4">
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "general" ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("general");
                      setcurrButton("general");
                    }}
                  >
                    General
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "business" ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("business");
                      setcurrButton("business");
                    }}
                  >
                    Business
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "sports" ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("sports");
                      setcurrButton("sports");
                    }}
                  >
                    Sports
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "entertainment"
                        ? "text-red-500"
                        : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("entertainment");
                      setcurrButton("entertainment");
                    }}
                  >
                    Entertainment
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "technology"
                        ? "text-red-500"
                        : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("technology");
                      setcurrButton("technology");
                    }}
                  >
                    Technology
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className={`cursor-pointer px-3 py-2 ${
                      currButton === "science" ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      setCategory("science");
                      setcurrButton("science");
                    }}
                  >
                    Science
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className={`cursor-pointer px-3 py-2 ${
                currButton === "Profile" ? "text-red-500" : "text-white"
              }`}
              onClick={() => {
                profile();
                setcurrButton("Profile");
              }}
            >
              Profile
            </button>
            <button
              className={`cursor-pointer px-3 py-2 ${
                currButton === "Logout" ? "text-red-500" : "text-white"
              }`}
              onClick={() => {
                handleLogout();
                setcurrButton("Logout");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
