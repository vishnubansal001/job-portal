import { catchError } from "../utils/helper";
import client from "./client";

export const postJobs = async ({ jobs, id }) => {
  try {
    const { data } = await client.post(`/admin/update-posts`, { jobs, id });
    // console.log(data);
    return data.message;
  } catch (error) {
    return catchError(error);
  }
};
