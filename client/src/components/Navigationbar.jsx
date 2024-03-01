import React from "react";
import { useNavigate, useState } from "react-router-dom";
function Navigationbar({ setCategory }) {
  const navigate = useNavigate();
  const [Profile, setProfile] = useState(false);
  const [currButton, setcurrButton] = useState(null);

  const handleLogout = () => {
    navigate("/register");
  };

  const profile = () => {
    setProfile(true);
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
                    className="cursor-pointer text-white px-3 py-2"
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
                    className="cursor-pointer text-white px-3 py-2"
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
                    className="cursor-pointer text-white px-3 py-2"
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
                    className="cursor-pointer text-white px-3 py-2"
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
                    className="cursor-pointer text-white px-3 py-2"
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
                    className=" text-white px-3 py-2"
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
            <button className="text-white font-bold mr-10" onClick={profile}>
              Profile
            </button>
            <button className=" text-white font-bold" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
