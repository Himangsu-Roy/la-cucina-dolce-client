import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
    const location = useLocation()
    
  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="relative">
          <div
            class="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"
          ></div>
          <div
            class="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-purple-500 border-t-transparent"
          ></div>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
