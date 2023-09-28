import { catchError } from "../utils/helper";
import client from "./client";

export const getUsersData = async () => {
  try {
    const { data } = await client.get(`/admin/all-users`);
    return data.users;
  } catch (error) {
    return catchError(error);
  }
};

