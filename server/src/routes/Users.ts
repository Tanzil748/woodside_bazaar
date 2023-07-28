import express from "express";
import { register, login, logout, profile } from "../controllers/Users";
import { protectedRoute } from "../middleware/authentication";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protectedRoute, profile);

export { router as authRouter };
