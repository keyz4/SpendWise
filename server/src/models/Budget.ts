import mongoose, { Schema, Document } from "mongoose";

/**
 * Budget Model
 *
 * TODO: Add method to check if budget is exceeded
 * TODO: Add virtual for remaining amount
 * TODO: Add validation that endDate > startDate
 */

export interface IBudget extends Document {
  userId: mongoose.Types.ObjectId;
  category: string;
  amount: number;
  spent: number;
  period: "weekly" | "monthly" | "yearly";
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Budget amount is required"],
      min: [0, "Budget amount must be positive"],
    },
    spent: {
      type: Number,
      default: 0,
      min: [0, "Spent amount cannot be negative"],
    },
    period: {
      type: String,
      enum: ["weekly", "monthly", "yearly"],
      default: "monthly",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
  },
  {
    timestamps: true,
  }
);

// TODO: Add virtual for remaining budget
// BudgetSchema.virtual("remaining").get(function () {
//   return this.amount - this.spent;
// });

// TODO: Add pre-save validation
// BudgetSchema.pre("save", function (next) {
//   if (this.endDate <= this.startDate) {
//     return next(new Error("End date must be after start date"));
//   }
//   next();
// });

export default mongoose.model<IBudget>("Budget", BudgetSchema);
