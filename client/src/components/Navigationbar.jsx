import React from "react";
import { useNavigate } from "react-router-dom";
function Navigationbar({ setCategory }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/register");
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
                {" "}
                {/* Added mr-4 for spacing */}
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("general")}
                  >
                    General
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("business")}
                  >
                    Business
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("sports")}
                  >
                    Sports
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("entertainment")}
                  >
                    Entertainment
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("technology")}
                  >
                    Technology
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="cursor-pointer text-white px-3 py-2"
                    onClick={() => setCategory("science")}
                  >
                    Science
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className=" text-white font-bold" onClick={handleLogout}>
            Logout
          </button>
          <button className="block lg:hidden text-white focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            ></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
