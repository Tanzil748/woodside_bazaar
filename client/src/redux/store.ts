import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productSlice.reducerPath]: productSlice.reducer,
    cart: cartReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});
