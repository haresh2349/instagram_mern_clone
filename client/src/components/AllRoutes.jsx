import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "./Profile";
import { ReqAuth } from "./ReqAuth";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
