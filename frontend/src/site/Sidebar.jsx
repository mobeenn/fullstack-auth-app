import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [user, setUser] = useState({ name: "", email: "" });
   const navigate = useNavigate();

   useEffect(() => {
      // LocalStorage se user data fetch
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("userEmail");
      setUser({
         name: name || "Guest User",
         email: email || "guest@example.com",
      });
   }, []);

   const handleLogout = () => {
      localStorage.clear(); // saari cheeze clear
      navigate("/"); // redirect
   };

   return (
      <div className="w-64 h-screen bg-[#171717] text-white flex flex-col justify-between">
         {/* Top Section */}
         <div className="p-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
               <div className="w-6 h-6 bg-white"></div>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
               {/* New Chat */}
               <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                     />
                  </svg>
                  <span>New chat</span>
               </div>

               {/* Quick Actions */}
               <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 4h6M4 9h6m4 0h6M4 15h6m4 0h6M9 20h6"
                     />
                  </svg>
                  <span>Quick Actions</span>
               </div>

               {/* Spaces */}
               <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2 12h20"
                     />
                  </svg>
                  <span>Spaces</span>
               </div>

               {/* Chat History */}
               <div className="flex items-center space-x-3 cursor-pointer hover:text-gray-300">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="w-5 h-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h8m-8 4h5m-9 5l2-2h8a4 4 0 004-4V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6a4 4 0 004 4h.586L8 19z"
                     />
                  </svg>
                  <span>Chat History</span>
               </div>
            </div>
         </div>

         {/* Bottom User Section */}
         <div className="relative p-4">
            <div
               className="flex items-center space-x-3 cursor-pointer"
               onClick={() => setDropdownOpen(!dropdownOpen)}
            >
               <img
                  src="https://via.placeholder.com/32"
                  alt="profile"
                  className="w-8 h-8 rounded-full"
               />
               <div>
                  <p className="text-sm">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
               </div>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
               <div className="absolute bottom-14 left-4 w-40 bg-[#2a2a2a] rounded-md shadow-lg">
                  <button
                     onClick={handleLogout}
                     className="block w-full text-left px-4 py-2 text-sm hover:bg-[#3a3a3a]"
                  >
                     Logout
                  </button>
               </div>
            )}
         </div>
      </div>
   );
};
