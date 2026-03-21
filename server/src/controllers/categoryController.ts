import { Request, Response } from "express";

/**
 * Category Controller
 *
 * TODO: Implement CRUD operations for categories
 * TODO: Add seed data for default categories
 */

// GET /api/categories
export const getCategories = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Fetch all categories (default + user-created)
  // 1. Get user ID from auth middleware
  // 2. Query categories where userId is null (default) or matches user
  // 3. Return categories
  res.status(501).json({ message: "Not implemented yet" });
};

// POST /api/categories
export const createCategory = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Create a custom category
  // 1. Validate request body (name, type, color, icon)
  // 2. Check for duplicate category name for this user
  // 3. Create category with user ID
  // 4. Return created category
  res.status(501).json({ message: "Not implemented yet" });
};

// DELETE /api/categories/:id
export const deleteCategory = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Delete a custom category
  // 1. Validate category ID
  // 2. Verify it's not a default category
  // 3. Check if any transactions use this category
  // 4. Delete category
  // 5. Return success message
  res.status(501).json({ message: "Not implemented yet" });
};
