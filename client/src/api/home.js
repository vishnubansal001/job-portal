import { catchError } from "../utils/helper";
import client from "./client";

export const getJobs = async () => {
  try {
    const { data } = await client.get(`/home/get-jobs`);
    return data.jobs;
  } catch (error) {
    return catchError(error);
  }
};
