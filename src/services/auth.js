import api from "../configs/api";
import { getCookie } from "../utils/cookie";

const sendOtp = async (mobile) => {
  try {
    const response = await api.post("/auth/send-otp", { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (mobile, code) => {
  try {
    const response = await api.post("/auth/check-otp", { mobile, code });
    return { response };
  } catch (error) {
    return { error };
  }
};

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    request.headers["Authorization"] = `bearer ${accessToken}`;
    return request;
  },
  (error) => {
    return new Promise.reject(error);
  }
);

export { sendOtp, checkOtp };
