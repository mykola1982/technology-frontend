import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import * as materialsAPI from "../../services/materials-API";

export const fetchMaterials = createAsyncThunk(
  "materials/fetchAllMaterials",
  async (_, thunkAPI) => {
    try {
      const { data } = await materialsAPI.featchAllMaterialsAPI();
      return data;
    } catch (error) {
      toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMaterial = createAsyncThunk(
  "materials/addMaterial",
  async (body, thunkAPI) => {
    try {
      const { data } = await materialsAPI.addMaterialAPI(body);
      toast.success(`Mатеріал успішно додано до списку`);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Матеріал з такими параметрами вже є в списку`);
      } else {
        toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMaterial = createAsyncThunk(
  "materials/deleteMaterial",
  async (id, thunkAPI) => {
    try {
      const result = await materialsAPI.removeMaterialsAPI(id);
      toast.success(`Mатеріал  успішно видалено зі списку`);
      return result;
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
      toast.success("Mатеріал успішно оновлено");
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`Матеріал з такими параметрами вже є в списку`);
      } else {
        toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
