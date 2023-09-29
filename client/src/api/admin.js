import { catchError } from "../utils/helper";
import client from "./client";

export const postJobs = async ({ jobs }) => {
  try {
    const { data } = await client.post(`/admin/update-post`, { jobs });
    console.log(data);
    return data.message;
  } catch (error) {
    return catchError(error);
  }
};
