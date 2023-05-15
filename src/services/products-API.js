import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const fetchAllProductAPI = async () => {
  const { data } = await axios.get("/products");
  return data;
};

export const fetchProductAPI = async () => {};

export const addProductAPI = async (body) => {
  const { data } = await axios.post("/products", body);
  return data;
};

export const removeProductAPI = async (id) => {
  const { data } = await axios.delete(`/products/${id}`);
  return data;
};

export const updateProductAPI = async () => {};
