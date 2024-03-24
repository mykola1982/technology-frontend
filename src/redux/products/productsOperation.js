import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import * as productsAPI from "services/products-API";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await productsAPI.fetchAllProductsAPI();
      return data;
    } catch (error) {
      toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await productsAPI.fetchProductAPI(id);
      console.log(data);
      return data;
    } catch (error) {
      toast.error("Щось пішло не так ... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
