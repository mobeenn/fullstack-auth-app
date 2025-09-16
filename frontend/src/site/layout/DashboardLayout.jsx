import React from "react";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
   return (
      <>
         <div className="flex h-screen bg-[#171717] text-white">
            <Sidebar />

            <main className="flex-1      overflow-y-auto">
               <Outlet />
            </main>
         </div>
      </>
   );
};
