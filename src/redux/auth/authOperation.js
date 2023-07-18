import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import * as authAPI from "../../services/auth-API.js";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await authAPI.createUser(credentials);

      console.log(response);

      toast.success(`Користувача ${credentials.name} успішно додано`);
      return response;
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
        return;
      }

      if (error.code === "ERR_BAD_REQUEST") {
        toast.error(
          `Користувач з іменем ${credentials.name} вже зареєстрований`
        );
        return;
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
