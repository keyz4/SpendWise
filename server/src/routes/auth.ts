import { Router } from "express";
import { register, login, getMe } from "../controllers/authController";
// import { protect } from "../middleware/auth";

const router = Router();

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

// GET /api/auth/me
// TODO: Add auth middleware to protect this route
// router.get("/me", protect, getMe);
router.get("/me", getMe);

export default router;
