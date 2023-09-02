import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import * as materialsAPI from "../../services/materials-API";

export const fetchMaterials = createAsyncThunk(
  "materials/fetchAllMaterials",
  async (_, thunkAPI) => {
    try {
      const { data } = await materialsAPI.featchAllMaterialsAPI();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMaterial = createAsyncThunk(
  "materials/addMaterial",
  async (body, thunkAPI) => {
    try {
      const { data } = await materialsAPI.addMaterialAPI(body);
      toast.success(`Mатеріал ${body} успішно додано до списку`);
      return data;
    } catch (error) {
      toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMaterial = createAsyncThunk(
  "materials/deleteMaterial",
  async (id, thunkAPI) => {
    try {
      const { data } = await materialsAPI.removeMaterialsAPI(id);
      toast.success(`Mатеріал  успішно видалено зі списку`);
      return data;
    } catch (error) {
      toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateMaterial = createAsyncThunk(
  "materials/updateMaterial",
  async ({ id, body }, thunkAPI) => {
    try {
      const { data } = await materialsAPI.updateMaterialAPI(id, body);
      toast.success("матеріал успішно новлено");
      return data;
    } catch (error) {
      toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
