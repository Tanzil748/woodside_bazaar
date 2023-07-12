import express from "express";
import { getAllProducts } from "../controllers/Products";
const router = express.Router();

router.get("/", getAllProducts);

export { router as productRouter };
