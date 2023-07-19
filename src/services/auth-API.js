import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const createUser = async (credentials) => {
  const { data } = await axios.post("/auth/signup", credentials);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post("/auth/login", credentials);
  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.get("./auth/logout");
  return data;
};
