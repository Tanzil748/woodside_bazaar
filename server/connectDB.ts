import mongoose from "mongoose";
import "dotenv/config";

export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Mongo Success");
  } catch (error) {
    console.log("Mongo Fail");
  }
};
