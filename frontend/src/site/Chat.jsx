import React, { useState, useRef, useEffect } from "react";

export const Chat = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const menuRef = useRef(null); // dropdown ref
   const buttonRef = useRef(null); // plus button ref

   useEffect(() => {
      function handleClickOutside(event) {
         // Agar click menu ya button ke andar nahi hai to close kar do
         if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
         ) {
            setMenuOpen(false);
         }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
         {/* Logo Placeholder */}
         <div className="flex items-center justify-center mb-10">
            <div className="w-32 h-32 bg-red-500 rounded-xl flex items-center justify-center">
               {/* Yahan apna logo laga lena */}
               <span className="text-white text-2xl font-bold">Logo</span>
            </div>
         </div>

         {/* Input Section */}
         <div className="relative w-full max-w-2xl">
            <div className="flex items-center bg-neutral-900 rounded-full px-4 py-3 shadow-md">
               {/* Plus button */}
               <button
                  ref={buttonRef}
                  className="mr-3 text-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  {/* Plus Icon in SVG */}
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
               </button>

               {/* Input Field */}
               <input
                  type="text"
                  placeholder="Ask something..."
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
               />

               {/* Send button */}
               <button className="ml-3 text-gray-400 hover:text-white">
                  {/* Send (Paper Plane) Icon in SVG */}
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
                        d="M5 12l14-7-4 7 4 7-14-7z"
                     />
                  </svg>
               </button>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
               <div
                  ref={menuRef}
                  className="absolute left-0 bottom-14 w-56 bg-neutral-800 rounded-xl shadow-lg p-3 space-y-2"
               >
                  <p className="cursor-pointer hover:bg-neutral-700 rounded-md p-2">
                     New Chat
                  </p>
                  <p className="cursor-pointer hover:bg-neutral-700 rounded-md p-2">
                     Upload File
                  </p>
                  <p className="cursor-pointer hover:bg-neutral-700 rounded-md p-2">
                     Settings
                  </p>
                  <p className="cursor-pointer hover:bg-neutral-700 rounded-md p-2">
                     Help
                  </p>
                  <p className="cursor-pointer hover:bg-neutral-700 rounded-md p-2">
                     Logout
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};
