import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-ocean-blue text-white px-6 py-4 shadow-lg flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-extrabold">
            Clean Water Initiative
            <span className="block text-sm font-light text-clear-aqua">
              Sanitation for All
            </span>
          </div>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          {[
            "/",
            "/Goverment_Schemes",
            "/Blogs",
            "/Water_Usage",
            "/Learn-More",
            "/Get-Involved",
          ].map((path, index) => (
            <li key={index} className="group">
              <Link
                to={path}
                className="relative text-white hover:bg-light-aqua px-3 py-2 rounded transition-colors duration-300"
              >
                {path.replace("/", "").replace("_", " ") || "Home"}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-clear-aqua transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-ocean-blue text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="text-2xl font-extrabold">
            Clean Water Initiative
            <span className="block text-sm font-light text-clear-aqua">
              Sanitation for All
            </span>
          </div>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-4 p-4">
          {[
            "/",
            "/Goverment_Schemes",
            "/Blogs",
            "/Water_Usage",
            "/Learn-More",
            "/Get-Involved",
          ].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className="block text-white hover:bg-light-aqua px-3 py-2 rounded transition-colors duration-300"
                onClick={toggleSidebar}
              >
                {path.replace("/", "").replace("_", " ") || "Home"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
