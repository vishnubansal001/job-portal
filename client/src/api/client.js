import axios from "axios";

const client = axios.create({ baseURL: "https://job-portal-server-seven-xi.vercel.app" });

export default client;
