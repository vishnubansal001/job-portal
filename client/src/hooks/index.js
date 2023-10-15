import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NotificationContext } from "../context/NotificationProvider";
import { JobsContext } from "../context/JobsProvider";

export const useAuth = () => useContext(AuthContext);
export const useNotification = () => useContext(NotificationContext);
export const useJobs = () => useContext(JobsContext);
