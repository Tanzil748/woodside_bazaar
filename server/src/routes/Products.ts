import express from "express";
import { getAllProducts, getByCategory } from "../controllers/Products";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:category", getByCategory);

export { router as productRouter };
