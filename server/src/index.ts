import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 4444;
import { connectDb } from "./connectDb";

const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log("Server failed to start");
  }
};

startServer();
