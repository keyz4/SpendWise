import mongoose, { Schema, Document } from "mongoose";

/**
 * Category Model
 *
 * TODO: Add seed data for default categories
 * TODO: Add icon field for UI display
 */

export interface ICategory extends Document {
  name: string;
  type: "income" | "expense";
  color: string;
  icon: string;
  userId: mongoose.Types.ObjectId | null; // null = default category
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      maxlength: [30, "Category name cannot exceed 30 characters"],
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Category type is required"],
    },
    color: {
      type: String,
      default: "#6366f1",
    },
    icon: {
      type: String,
      default: "tag",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null, // null means it's a default/system category
    },
  },
  {
    timestamps: true,
  }
);

// TODO: Add compound index for unique category names per user
// CategorySchema.index({ name: 1, userId: 1 }, { unique: true });

export default mongoose.model<ICategory>("Category", CategorySchema);
