import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

/**
 * Auth Middleware — JWT Token Verification
 *
 * TODO: Implement JWT verification
 * TODO: Add token refresh mechanism
 * TODO: Handle expired tokens gracefully
 *
 * Usage: Add `protect` middleware to any route that requires authentication
 * Example: router.get("/profile", protect, getProfile);
 */

// Extend Express Request to include user
export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // TODO: Implement JWT verification
  // 1. Get token from Authorization header (Bearer <token>)
  // 2. Verify token using jwt.verify() and JWT_SECRET
  // 3. Decode token to get user ID
  // 4. Find user in database
  // 5. Attach user to request object
  // 6. Call next()

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Not authorized — no token provided" });
    return;
  }

  try {
    // TODO: Replace this placeholder with actual JWT verification
    // const token = authHeader.split(" ")[1];
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    // const user = await User.findById(decoded.id).select("-password");
    // if (!user) {
    //   res.status(401).json({ message: "Not authorized — user not found" });
    //   return;
    // }
    // req.user = { id: user._id.toString(), email: user.email };

    console.warn("⚠️  Auth middleware not implemented — passing through");
    next();
  } catch {
    res.status(401).json({ message: "Not authorized — invalid token" });
  }
};
