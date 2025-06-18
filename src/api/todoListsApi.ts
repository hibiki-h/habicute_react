import axios from "axios";

const isDevelopment = import.meta.env.MODE === "development";
const apiUrl = isDevelopment
  ? import.meta.env.VITE_APT_BASE_URL_LOCAL
  : import.meta.env.VITE_APT_BASE_URL_DEPLOY;

console.log(`MODE output : ${import.meta.env.MODE}`)

const API_BASE_URL = apiUrl;
const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default AxiosInstance;
