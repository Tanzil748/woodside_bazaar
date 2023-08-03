import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 4444;
import { connectDb } from "./connectDb";
import cors from "cors";
import cookieParser from "cookie-parser";
import { productRouter } from "./routes/Products";
import { authRouter } from "./routes/Users";

// middleware
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);

const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log("Server failed to start");
  }
};

startServer();
