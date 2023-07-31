import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import * as authAPI from "services/auth-API.js";

// export const register = createAsyncThunk(
//   "auth/register",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await authAPI.createUser(credentials);
//       toast.success(`Користувача ${credentials.name} успішно додано`);
//       return response;
//     } catch (error) {
//       if (error.code === "ERR_NETWORK") {
//         toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
//         return thunkAPI.rejectWithValue(error.message);
//       }

//       if (error.code === "ERR_BAD_REQUEST") {
//         toast.error(
//           `Користувач з іменем ${credentials.name} вже зареєстрований`
//         );
//         return thunkAPI.rejectWithValue(error.message);
//       }

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await authAPI.loginUser(credentials);
      authAPI.setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        toast.error("Щось пішло не так... Спробуйте перезавантажити сторінку");
        return thunkAPI.rejectWithValue(error.message);
      }

      if (error.code === "ERR_BAD_REQUEST") {
        toast.error(`Логін чи пароль не є валідними. Спробуйте ще раз.`);
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await authAPI.logoutUser();
    authAPI.clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      authAPI.setAuthHeader(persistedToken);
      const response = await authAPI.refreshUser();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
