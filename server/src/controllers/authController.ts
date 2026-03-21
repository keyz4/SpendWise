import { Request, Response } from "express";

/**
 * Auth Controller
 *
 * TODO: Implement user registration with password hashing
 * TODO: Implement login with JWT token generation
 * TODO: Implement token refresh logic
 * TODO: Add input validation (express-validator)
 */

// POST /api/auth/register
export const register = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Implement user registration
  // 1. Validate request body (name, email, password)
  // 2. Check if user already exists
  // 3. Hash password using bcryptjs
  // 4. Create user in database
  // 5. Generate JWT token
  // 6. Return user data and token
  res.status(501).json({ message: "Not implemented yet" });
};

// POST /api/auth/login
export const login = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Implement user login
  // 1. Validate request body (email, password)
  // 2. Find user by email
  // 3. Compare password with hashed password
  // 4. Generate JWT token
  // 5. Return user data and token
  res.status(501).json({ message: "Not implemented yet" });
};

// GET /api/auth/me
export const getMe = async (_req: Request, res: Response): Promise<void> => {
  // TODO: Implement get current user
  // 1. Get user ID from request (set by auth middleware)
  // 2. Find user by ID
  // 3. Return user data (excluding password)
  res.status(501).json({ message: "Not implemented yet" });
};
