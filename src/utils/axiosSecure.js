import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

// Create an instance of axios
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL + "/api/v1",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosSecure.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Replace 'token' with your token key

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosSecure.interceptors.response.use(
  (response) => {
    // Handle successful response here
    console.log(response.data.token)
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  },
  (error) => {
    // Handle response error here

    if (error.response?.status === 401) {
      signOut(auth);
      localStorage.removeItem("token");
    }

    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
    } else {
      // Something else caused the error
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
