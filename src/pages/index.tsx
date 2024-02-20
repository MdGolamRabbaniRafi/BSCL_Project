"use client";
import React, { useState } from "react";
 
const Catalog = () => {
  // State to control whether the navbar is minimized. Initially set to false so the navbar is shown.
  const [isNavbarMinimized, setIsNavbarMinimized] = useState(false);
 
  // Function to toggle the navbar visibility state.
  const toggleNavbar = () => {
    setIsNavbarMinimized(!isNavbarMinimized);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <div className="min-h-screen bg-gray-300">
      <header className="bg-white shadow"></header>
      <main className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="bg-azure-100 rounded-lg shadow-xl p-6">
              <div className="flex flex-col lg:flex-row">
                {/* Navbar Section */}
                <div
                  className={`w-full lg:w-1/5 bg-red-200 transition-all duration-500 ease-in-out relative ${
                    isNavbarMinimized ? "lg:w-20" : "lg:w-1/5"
                  }`}
                >
                  {/* Three-dot icon always visible */}
                  <div
                    className="absolute top-0 right-0 p-2 cursor-pointer md:text-center"
                    onClick={toggleNavbar}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6h.01M12 12h.01M12 18h.01"
                      />
                    </svg>
                  </div>
                  {/* Conditional rendering for the rest of the navbar content */}
                  {!isNavbarMinimized && (
                    <div className="pt-0">
                      <div className="h-16 bg-purple-400"></div>
                      <div className="p-2 bg-gray-400">
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
 
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                          <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                            list1
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-12 bg-transparent hover:bg-gray-700 cursor-pointer mt-2">
                          <svg
                            className="h-8 w-8 text-red-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Main Content Section */}
                <div
                  className={`flex-1 bg-white-200 transition-all duration-500 ease-in-out`}
                >
                  <nav className="bg-white border-gray-200 flex justify-between dark:bg-gray-900 h-16">
                    <div className="p-6">
                      Menu
 
                    </div>
                    <div className="p-3 mr-10">
                      <button
                        type="button"
                        className="flex text-sm bg-gray-800 relative rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded={isDropdownOpen}
                        onClick={toggleDropdown}
                      >
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/"
                          alt="user photo"
                        />
                      </button>
                      <div
                            className={`z-50 ${
                              isDropdownOpen ? "block" : "hidden"
                            }  h-auto text-base list-none  bg-red-500  divide-y  mt-6 absolute w-20  divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 `}
                          >
                           <div>
                            Rafi
                           
                           </div>
                           <div>
                            fahad
                           
                           </div>
                           
                           
                          </div>
                    </div>
                  </nav>
 
                  <div className="flex flex-wrap gap-3 p-3">
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                    <div className="bg-green-600 mt-2 hover:bg-gray-700 w-28 h-28"></div>
                  </div>
                  <div className="h-96 bg-red-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
 
export default Catalog;
 