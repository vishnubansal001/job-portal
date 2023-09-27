import React from "react";
import AuthProvider from "./AuthProvider";

export default function ContextProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
