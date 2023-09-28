import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import EmailVerification from "../pages/EmailVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ConfirmPassword from "../pages/ConfirmPassword";
import Job from "../pages/Job";
import Application from "../pages/Application";
import Recommendations from "../pages/Recommendations";
import Openings from "../admin/Openings";

const AdminNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route path="/verification" element={<EmailVerification />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/job/:teamName/:jobName" element={<Job />} />
      <Route path="/job-form" element={<Application />} />
      <Route path="/applications" element={<Recommendations />} />
      <Route path="/openings" element={<Openings />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AdminNavigator;
