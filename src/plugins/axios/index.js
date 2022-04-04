import axios from "axios";
import interceptors from "@/plugins/axios/interceptors";

/**
 * Settings opt Axios
 */
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": true,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credentials: "same-origin",
});
interceptors(instance);
export default instance;
