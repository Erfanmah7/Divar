import axios from "axios";
<<<<<<< HEAD
import { getNewToken } from "../services/token";
import { getCookie, setCookie } from "../utils/cookie";
=======
import { getCookie } from "../utils/cookie";
>>>>>>> main

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
<<<<<<< HEAD
      request.headers["Authorization"] = `Bearer ${accessToken}`;
=======
      request.headers["Authorization"] = `bearer ${accessToken}`;
>>>>>>> main
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originRequest = error.config;

    if (error.response.status === 401 && !originRequest._retry) {
      originRequest._retry = true;
      const res = await getNewToken();

      if (!res?.response) return;
      setCookie(res?.response.data);
      return api(originRequest);
    }
  }
);

=======
>>>>>>> main
export default api;
