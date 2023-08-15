import { createSlice } from "@reduxjs/toolkit";
import {
  // register,
  logIn,
  logOut,
  refreshUser,
  clearToken,
} from "./authOperation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  user: { name: null, userId: null, role: null },
  token: null,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // [register.pending]: handlePending,
    // [register.fulfilled](state) {
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [register.rejected]: handleRejected,

    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [logIn.rejected]: handleRejected,

    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.user = { name: null, userId: null, role: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected]: handleRejected,

    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },

    [refreshUser.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [clearToken](state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
