import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer } from "./auth/authSlice";
import { materialsReducer } from "./materials/materialsSlice";
import { productsReducer } from "./products/productsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    materials: materialsReducer,
    products: productsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
