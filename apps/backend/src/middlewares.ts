import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      id?: number | undefined;
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers["authorization"] as string;
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  token = token.split(" ")[1];
  jwt.verify(token, "Salt", function (err, decoded) {
    if (err) {
      console.error("Token verification error:", err);
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    req.id = (decoded as { id: number }).id;
    next();
  });
};
