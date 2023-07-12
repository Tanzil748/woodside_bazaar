import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 4444;
import { connectMongo } from "./connectDB";

const startServer = async () => {
  try {
    await connectMongo();
    app.listen(port, () => {
      console.log(`Server connected on ${port}`);
    });
  } catch (error) {
    console.log("Server connected");
  }
};

startServer();
