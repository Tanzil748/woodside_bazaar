import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
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
        chosen_quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    total_cost: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("orderModel", orderSchema);
