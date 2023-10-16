import { catchError, getToken } from "../utils/helper";
import client from "./client";

export const sendApplication = async (data) => {
  const token = getToken();
  try {
    // console.log(data);
    const { resData } = await client.post("/jobs/info-data", data, {
      headers: {
        // Authorization: "Bearer " + token,
        "content-type": "mulitpart/form-data",
      },
    });
    // return data;
  } catch (error) {
    return catchError(error);
  }
};
