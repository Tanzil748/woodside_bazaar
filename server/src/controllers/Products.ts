import { Request, Response } from "express";
import { ProductsModel } from "../models/Products";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductsModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("All products not recieved");
  }
};

export const getByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const products = await ProductsModel.find({ category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Category fetch failed");
  }
};
