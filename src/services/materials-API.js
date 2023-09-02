import axios from "axios";

axios.defaults.baseURL = "https://technology-backend.onrender.com/api";

export const featchAllMaterialsAPI = async () => {
  const { data } = await axios.get("/materials");

  return data;
};

export const featchMaterialAPI = async (id) => {
  const { data } = await axios.get(`/materials/${id}`);
  console.log(data);
  return data;
};

export const addMaterialAPI = async (body) => {
  const { data } = await axios.post("/materials", body);
  return data;
};

export const removeMaterialsAPI = async (id) => {
  const { data } = await axios.delete(`/materials/${id}`);
  return data;
};

export const updateMaterialAPI = async (id, body) => {
  const { data } = await axios.put(`/materials/${id}`, body);
  return data;
};
