import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import { authEndpoints } from "./authEndpoints";

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productSlice.reducerPath]: productSlice.reducer,
    cart: cartReducer,
    auth: authReducer,
    [authEndpoints.reducerPath]: authEndpoints.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productSlice.middleware,
      authEndpoints.middleware
    ),
});
