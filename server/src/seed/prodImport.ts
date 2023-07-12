import "dotenv/config";
import { seederData } from "./seedData";
import { connectDb } from "../connectDb";
import { ProductsModel } from "../models/Products";

const transferSeedData = async () => {
  try {
    await connectDb();
    await ProductsModel.deleteMany({});
    await ProductsModel.insertMany(seederData);
    console.log("Seed data transferred");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

transferSeedData();
