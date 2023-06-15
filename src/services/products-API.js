import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const fetchAllProductsAPI = async () => {
  const { data } = await axios.get("/products");
  return data;
};

export const fetchProductAPI = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

export const addProductAPI = async (body) => {
  const { data } = await axios.post("/products", body);
  return data;
};

export const removeProductAPI = async (id) => {
  const { data } = await axios.delete(`/products/${id}`);
  return data;
};

export const updateProductAPI = async (id, body) => {
  const { data } = await axios.put(`/products/${id}`, body);
  return data;
};
