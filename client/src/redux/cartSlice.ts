import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// individual product
export interface Product {
  cartQuantity: number;
  category: string;
  img: string;
  name: string;
  price: number;
  _id: string;
}

// entire initial state
interface CartState {
  selectedProducts: Product[];
  selectedProductQuantity: number;
  totalPrice: number;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const initialSelectedProducts: Product[] = localStorage.getItem(
  "selectedProducts"
)
  ? JSON.parse(localStorage.getItem("selectedProducts")!)
  : [];

const initialState: CartState = {
  selectedProducts: initialSelectedProducts,
  selectedProductQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductCart: (state, action: PayloadAction<Product>) => {
      // check if selected product exists
      const itemIndex = state.selectedProducts.findIndex(
        (item) => item._id === action.payload._id
      );
      // -1 only would occur if selected product was not already chosen before
      if (itemIndex !== -1) {
        // created cartQuantity to keep track of each selected product quantity
        state.selectedProducts[itemIndex].cartQuantity += 1;
      } else {
        // add w/ cart quantity of 1
        state.selectedProducts.push({ ...action.payload, cartQuantity: 1 });
      }

      // update selectedProductQuantity [works in product page too]
      state.selectedProductQuantity += 1;

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    decreaseProductCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.selectedProducts.findIndex(
        (item) => item._id === action.payload._id
      );

      // if there are more than one of product, only subtract one
      if (state.selectedProducts[itemIndex].cartQuantity > 1) {
        state.selectedProducts[itemIndex].cartQuantity -= 1;
      } else if (state.selectedProducts[itemIndex].cartQuantity === 1) {
        // remove from array if only one quantity left
        state.selectedProducts = state.selectedProducts.filter(
          (item) => item._id !== action.payload._id
        );
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    clearAllCart: (state) => {
      state.selectedProducts = [];
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },

    //reduce => callback function -1st, initial value -2nd
    calcAllTotals: (state) => {
      // create quantity & total, later equal it to respective selectedProductQuantity & totalPrice
      const { total, quantity } = state.selectedProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          return {
            total: cartTotal.total + itemTotal,
            quantity: cartTotal.quantity + cartQuantity,
          };
        },
        {
          // initial values
          total: 0,
          quantity: 0,
        }
      );
      state.selectedProductQuantity = quantity;
      state.totalPrice = total;
    },

    // after a successful order, I clear out the current order
    cartSuccessReset: (state) => {
      state.selectedProducts = [];
      state.selectedProductQuantity = 0;
      localStorage.removeItem("selectedProducts");
    },
  },
});

export const {
  addProductCart,
  decreaseProductCart,
  clearAllCart,
  calcAllTotals,
  cartSuccessReset,
} = cartSlice.actions;
export default cartSlice.reducer;
