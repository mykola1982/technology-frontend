import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const fetchAllOrdersAPI = async () => {
  const { data } = await axios.get("/orders");
  return data;
};

export const fetchOrderAPI = async (id) => {
  const { data } = await axios.get(`/product/${id}`);
  return data;
};

export const addOrderAPI = async (body) => {
  const { data } = await axios.post("/orders", body);
  return data;
};

export const removeOrderAPI = async (id) => {
  const { data } = await axios.delete(`/order/${id}`);
  return data;
};
