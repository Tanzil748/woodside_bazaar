import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cart_user_id: {
    type: String,
    required: true,
  },
  total_products: [
    {
      product_id: {
        type: String,
        required: true,
      },
      chosen_stock: {
        type: Number,
        default: 1,
      },
    },
  ],
});

export const orderModel = mongoose.model("orderModel", orderSchema);
