import axios from "axios";

export const addOrderAPI = async (body) => {
  const { data } = await axios.post("/orders", body);
  return data;
};
