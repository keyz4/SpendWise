import { Router } from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/categoryController";
// import { protect } from "../middleware/auth";

const router = Router();

// TODO: Add auth middleware to all routes
// router.use(protect);

// GET /api/categories
router.get("/", getCategories);

// POST /api/categories
router.post("/", createCategory);

// DELETE /api/categories/:id
router.delete("/:id", deleteCategory);

export default router;
