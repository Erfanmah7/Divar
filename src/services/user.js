import api from "../configs/api";

//Please make sure to return a value other than undefined from your query function. Affected query key: ["profile"]
const getProfile = () => api.get("/user/whoami").then((res) => res || false);

// const token = getCookie("accessToken");

// const getProfile = () =>
//   api.get("/user/whoami", { headers: { Authorization: `bearer ${token}` } });

export { getProfile };
