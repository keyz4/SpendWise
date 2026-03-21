import { Router } from "express";
import {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController";
// import { protect } from "../middleware/auth";

const router = Router();

// TODO: Add auth middleware to all routes
// router.use(protect);

// GET /api/transactions
router.get("/", getTransactions);

// GET /api/transactions/:id
router.get("/:id", getTransaction);

// POST /api/transactions
router.post("/", createTransaction);

// PUT /api/transactions/:id
router.put("/:id", updateTransaction);

// DELETE /api/transactions/:id
router.delete("/:id", deleteTransaction);

export default router;
