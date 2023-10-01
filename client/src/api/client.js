import axios from "axios";

const client = axios.create({ baseURL: "http://job-portal-server-seven-xi.vercel.app" });

export default client;
