import React from "react";
import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotificationProvider";
import { JobsProvider } from "./JobsProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <JobsProvider>
        <AuthProvider>{children}</AuthProvider>
      </JobsProvider>
    </NotificationProvider>
  );
}
