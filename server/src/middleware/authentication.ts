import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/Users";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const protectedRoute = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  // jwt references my cookie header name in Users.ts controller, not the jwt imported in this file
  let userToken = req.cookies.jwt;

  try {
    if (userToken) {
      const decoded: any = jwt.verify(userToken, process.env.JWT_SECRET!);
      //   excludes password
      req.user = await userModel.findById(decoded._id).select("-password");
      next();
    } else {
      res.status(403).json("User not authorized, invalid token!");
    }
  } catch (error) {
    res.status(403).json("User not authorized, need a token!");
  }
};
