import mongoose, { Schema, Document } from "mongoose";

/**
 * Transaction Model
 *
 * TODO: Add virtual for formatted amount
 * TODO: Add index on userId and date for query performance
 * TODO: Add pre-save validation for category existence
 */

export interface ITransaction extends Document {
  userId: mongoose.Types.ObjectId;
  type: "income" | "expense";
  amount: number;
  category: string;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Transaction type is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount must be positive"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, "Description cannot exceed 200 characters"],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

// TODO: Add index for faster queries
// TransactionSchema.index({ userId: 1, date: -1 });

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
