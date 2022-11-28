import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  let { authStatus } = useSelector((store) => store.AuthReducer);
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
