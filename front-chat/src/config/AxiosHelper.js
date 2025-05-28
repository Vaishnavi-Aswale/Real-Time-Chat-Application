import axios from "axios";

export const baseURL = "http://localhost:8081";

const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});

export default axiosInstance;
