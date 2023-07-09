import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
