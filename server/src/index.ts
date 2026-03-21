import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from "./routes/auth";
import transactionRoutes from "./routes/transactions";
import categoryRoutes from "./routes/categories";
import budgetRoutes from "./routes/budget";

// TODO: Import database connection
// import { connectDB } from "./config/db";

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
app.listen(PORT, () => {
  // TODO: Connect to MongoDB before starting the server
  // connectDB();
  console.log(`🚀 SpendWise server running on http://localhost:${PORT}`);
});

export default app;
