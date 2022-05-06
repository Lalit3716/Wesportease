import { Request, Response } from "express";
import User from "../models/User";

export const jwtSignUpController = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  const avatar = req.file?.path;

  const user = await User.create({
    username,
    password,
    email,
    avatar,
  });

  const token = user.issueToken();

  res.status(201).json({
    success: true,
    token,
  });
};

export const jwtLogInController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

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
  });
};
