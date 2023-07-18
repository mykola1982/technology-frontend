import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperation";

const handlePending = (state) => {
  state.authIsLoading = true;
};

const handleRejected = (state, action) => {
  state.authError = action.payload;
  state.authIsLoading = false;
};

const initialState = {
  user: { name: null, userId: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
    },
    [register.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
