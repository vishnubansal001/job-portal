import Openings from "./admin/Openings";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Job from "./pages/Job";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route exact path="/sign-up" element={<SignUp />}></Route>
      <Route exact path="/forgot-pass" element={<ForgotPassword />}></Route>
      <Route path="/" element={<PrivateRoute />}>
        <Header />
        <Route path="/" element={<HomePage />} />
        <Footer />
      </Route>
      <Route path="/job" element={<PrivateRoute />}>
        <Header />
        <Route path="/job" element={<Job />} />
        <Footer />
      </Route>
      <Route path="/job-form" element={<PrivateRoute />}>
        <Header />
        <Route path="/job-form" element={<Openings />} />
        <Footer />
      </Route>
      <Route path="/job-openings" element={<PrivateRoute />}>
        <Header />
        <Route path="/job-openings" element={<Openings />} />
        <Footer />
      </Route>
      <Route path="/applications" element={<PrivateRoute />}>
        <Header />
        <Route path="/applications" element={<Openings />} />
        <Footer />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
