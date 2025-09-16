import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   const token = localStorage.getItem("token"); // token check

   if (!token) {
      return <Navigate to="/" replace />; // no token redirect to signin
   }

   return children;
};

export default ProtectedRoute;
