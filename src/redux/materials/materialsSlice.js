import { createSlice } from "@reduxjs/toolkit";

import {
  fetchMaterials,
  addMaterial,
  deleteMaterial,
  updateMaterial,
} from "./materialsOperation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const materialsSlice = createSlice({
  name: "materials",
  initialState,
  extraReducers: {
    [fetchMaterials.pending]: handlePending,
    [fetchMaterials.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchMaterials.rejected]: handleRejected,

    [addMaterial.pending]: handlePending,
    [addMaterial.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addMaterial.rejected]: handleRejected,

    [deleteMaterial.pending]: handlePending,
    [deleteMaterial.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (item) => item._id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteMaterial.rejected]: handleRejected,

    [updateMaterial.pending]: handlePending,
    [updateMaterial.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.finIndex(
        (item) => item._id === action.payload.id
      );

      console.log(index);
      ///// дописати логіку оновлення
    },
    [updateMaterial.rejected]: handleRejected,
  },
});

export const materialsReducer = materialsSlice.reducer;
