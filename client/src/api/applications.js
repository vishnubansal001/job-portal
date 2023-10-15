import { catchError } from "../utils/helper";
import client from "./client";

export const getUsersData = async ({ id }) => {
  try {
    const { data } = await client.get(`/admin/all-users/${id}`);
    return data.users;
  } catch (error) {
    return catchError(error);
  }
};

export const getCsvFile = async ({ id }) => {
  try {
    const { data } = await client.get(`/admin/get-csv/${id}`);
    return data.url;
  } catch (error) {
    return catchError(error);
  }
};
