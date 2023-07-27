import { Request, Response } from "express";
import { userModel } from "../models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const doesUserExist = await userModel.findOne({ email });
    if (doesUserExist) {
      return res.status(401).json("User already exists with that email!");
    }

    // Hash password w/ bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // Now create user w/ payload
    const user = await userModel.create({
      username,
      email,
      password: hashed,
    });

    // create jwt-token in cookie
    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    return res
      .cookie("jwt", jwtToken, {
        httpOnly: true,
        // only returns true in production
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        _id: user._id,
        username: user.username,
        email: user.email,
      });
  } catch (error) {
    res.status(401).json("User failed to register account");
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json("Given email does NOT have account!");
    }

    // entered password vs registered user password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json("Wrong password");
    }

    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    return res
      .cookie("jwt", jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        _id: user._id,
        username: user.username,
        email: user.email,
      });
  } catch (error) {
    res.status(401).json("User failed to login to account");
  }
};

export const logout = async (req: Request, res: Response) => {
  return res
    .clearCookie("jwt", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    })
    .status(200)
    .json("User logged out");
};
