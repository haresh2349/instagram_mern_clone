import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Footer from "./Footer";
import OthersProfile from "./OthersProfile";
import Profile from "./Profile";
import { ReqAuth } from "./ReqAuth";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/profile"
          element={
            <ReqAuth>
              <Profile />
            </ReqAuth>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ReqAuth>
              <OthersProfile />
            </ReqAuth>
          }
        />
        <Route
          path="/"
          element={
            <ReqAuth>
              <Home />
            </ReqAuth>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
