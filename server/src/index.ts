import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from "./routes/auth.js";
import transactionRoutes from "./routes/transactions.js";
import budgetRoutes from "./routes/budget.js";
import categoryRoutes from "./routes/category.js"; // ✅ FIXED (missing import)

// Import DB connection
import connectDB from "./config/db.js"; // ✅ ADDED

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ──────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ─────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/budget", budgetRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "SpendWise API is running" });
});

// ─── Start Server ───────────────────────────────────────
const startServer = async () => {
  try {
    // ✅ Connect DB BEFORE server starts
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 SpendWise server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();

export default app;
