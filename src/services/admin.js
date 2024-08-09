import api from "../configs/api";

const addCategory = (data) => {
 return api.post("/category", data);
};

export { addCategory };
