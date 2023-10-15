import React, { useEffect, useState } from "react";
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
import { getJobs } from "../api/home";
import { useJobs } from "../hooks";
import { Toaster } from "react-hot-toast";

const AdminNavigator = () => {
  const [jobs, setJobs] = useState([]);
  const { array, setArray } = useJobs();
  const [color, setColor] = useState(null);
  useEffect(() => {
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      setColor(color);
    }
    getRandomColor();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
        setArray(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage color={color} />} />
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route path="/verification" element={<EmailVerification />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/job/:teamName/:jobName" element={<Job color={color} />} />
      <Route path="/job-form" element={<Application color={color} />} />
      <Route path="/applications" element={<Recommendations color={color} />} />
      <Route path="/openings" element={<Openings color={color} />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Toaster/>
    </>
  );
};

export default AdminNavigator;
