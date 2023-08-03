import express from "express";
import { register, login, profile } from "../controllers/Users";
import { protectedRoute } from "../middleware/authentication";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile/:id", protectedRoute, profile);

export { router as authRouter };
