import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Job from "./pages/Job";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Application from "./pages/Application";
import ConfirmPassword from "./pages/ConfirmPassword";
import EmailVerification from "./pages/EmailVerification";
import { useAuth, useJobs } from "./hooks";
import AdminNavigator from "./navigator/AdminNavigator";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { getJobs } from "./api/home";
import NotFound from "./pages/NotFound";

function App() {
  const { authInfo } = useAuth();

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
  const isAdmin = authInfo.profile?.role === "admin";
  if (isAdmin) return <AdminNavigator />;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage color={color} />} />
        <Route exact path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        {/* <Route path="/verification" element={<EmailVerification />} /> */}
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ConfirmPassword />} />
        <Route path="/job/:teamName/:jobName" element={<Job color={color} />} />
        <Route path="/job-form" element={<PrivateRoute />}>
          <Route path="/job-form" element={<Application color={color} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
