import { Router } from "express";
import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../controllers/budgetController";
// import { protect } from "../middleware/auth";

const router = Router();

// TODO: Add auth middleware to all routes
// router.use(protect);

// GET /api/budget
router.get("/", getBudgets);

// POST /api/budget
router.post("/", createBudget);

// PUT /api/budget/:id
router.put("/:id", updateBudget);

// DELETE /api/budget/:id
router.delete("/:id", deleteBudget);

export default router;
