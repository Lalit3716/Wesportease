import { Request, Response } from "express";
import User from "../models/User";

export const jwtSignUpController = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  let user;
  try {
    user = await User.create({
      username,
      password,
      email,
    });
  } catch (err: any) {
    if (err.name === "MongoServerError") {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    } else {
      throw new Error(err);
    }
  }

  const token = user.issueToken();

  res.status(201).json({
    success: true,
    token,
    user,
    expiresIn: 7 * 24 * 60 * 60 * 1000,
  });
};

export const jwtLogInController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const isValidPassword = await user.comparePassword(password);

  if (!isValidPassword) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const token = user.issueToken();

  res.status(200).json({
    success: true,
    token,
    user,
    expiresIn: 7 * 24 * 60 * 60 * 1000,
  });
};
