import axios from "axios";
import { getNewToken } from "../services/token";
import { setCookie } from "../utils/cookie";

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
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originRequest = error?.config;
    console.log(originRequest);

    if (error.response?.status === 401 && !originRequest._retry) {
      originRequest._retry = true;
      const res = await getNewToken();

      if (!res?.response) return;
      setCookie(res?.response.data);
      return api(originRequest);
    }
  }
);

export default api;
