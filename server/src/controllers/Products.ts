import { Request, Response } from "express";
import { ProductsModel } from "../models/Products";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductsModel.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json("All products not recieved");
  }
};
