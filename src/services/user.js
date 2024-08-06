import api from "../configs/api";

const getProfile = () => api.get("/user/whoami");

// const token = getCookie("accessToken");

// const getProfile = () =>
//   api.get("/user/whoami", { headers: { Authorization: `bearer ${token}` } });

export { getProfile };
