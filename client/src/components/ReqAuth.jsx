import React from "react";
import { Navigate } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("token")) || "";
  if (token == "") {
    return <Navigate to="/login" />;
  }
  return children;
};
