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

function App() {
  return (
    <Routes>
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route exact path="/forgot-pass" element={<ForgotPassword />}></Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/job/:teamName/:jobName" element={<PrivateRoute />}>
        <Route path="/job/:teamName/:jobName" element={<Job />} />
      </Route>
      <Route path="/job-form" element={<PrivateRoute />}>
        <Route path="/job-form" element={<Application />} />
      </Route>
      <Route path="/job-openings" element={<PrivateRoute />}>
        <Route path="/job-openings" element={<Openings />} />
      </Route>
      <Route path="/applications" element={<PrivateRoute />}>
        <Route path="/applications" element={<Recommendations />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
