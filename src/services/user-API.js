import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const fetchAllUsersAPI = async () => {
  const { data } = await axios.get("/users");
  return data;
};

export const addUserAPI = async (credentials) => {
  const { data } = await axios.post("/users", credentials);
  return data;
};

export const removeUserAPI = async (id) => {
  const { data } = await axios.delete(`/users/${id}`);
  return data;
};
