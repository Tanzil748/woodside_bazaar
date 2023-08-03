import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/Users";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const protectedRoute = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  let authHeader = req.headers.authorization;

  try {
    if (authHeader) {
      // split "Bearer" from actual jwt value
      const userToken = authHeader.split(" ")[1];
      const decoded: any = jwt.verify(userToken, process.env.JWT_SECRET!);
      // excludes password
      req.user = await userModel.findById(decoded._id).select("-password");
      next();
    } else {
      res.status(403).json("User not authorized, invalid token!");
    }
  } catch (error) {
    res.status(401).json("User not authenticated!");
  }
};
