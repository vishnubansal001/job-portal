import Openings from "./admin/Openings";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Job from "./pages/Job";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Application from "./pages/Application";
import Recommendations from "./pages/Recommendations";
import ConfirmPassword from "./pages/ConfirmPassword";
import EmailVerification from "./pages/EmailVerification";
import { useAuth } from "./hooks";
import AdminNavigator from "./navigator/AdminNavigator";

function App() {
  const { authInfo } = useAuth();
  // console.log(authInfo);
  const isAdmin = authInfo.profile?.role === "admin";
  // console.log(isAdmin);
  if (isAdmin) return <AdminNavigator />;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route path="/verification" element={<EmailVerification />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/job/:teamName/:jobName" element={<Job />} />
      <Route path="/job-form" element={<PrivateRoute />}>
        <Route path="/job-form" element={<Application />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
