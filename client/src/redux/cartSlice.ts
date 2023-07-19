import { createSlice } from "@reduxjs/toolkit";
import { fakeCart } from "../fakeData/fakeCart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedProducts: fakeCart,
    selectedProductQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProductCart: (state, action) => {
      // const cartProduct = state.selectedProducts.find((item) => item.id === payload.id);
    },
    decreaseProductCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    clearAllCart: (state, action) => {
      state.selectedProducts = [];
    },
  },
});

export const { clearAllCart } = cartSlice.actions;
export default cartSlice.reducer;
