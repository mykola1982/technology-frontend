import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProducts, fetchProduct } from "./productsOperation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  items: [],
  item: {},
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchAllProducts.pending]: handlePending,
    [fetchAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchAllProducts.rejected]: handleRejected,

    [fetchProduct.pending]: handlePending,
    [fetchProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.item = action.payload;
      state.error = null;
    },
    [fetchProduct.rejected]: handleRejected,
  },
});

export const productsReducer = productsSlice.reducer;
