import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = () => {
  const { authInfo } = useAuth();
  const [loggedIn, setLoggedIn] = useState(authInfo.isLoggedIn);
  useEffect(()=>{
    setLoggedIn(authInfo.isLoggedIn)
  },[authInfo.isLoggedIn])
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
