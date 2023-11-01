import { login, register } from "../services/authService";
import { AuthData, RegisterData } from "../types/authTypes";
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const params = req.body as AuthData;
  const authData = await login(params);
  res.status(200).send(authData);
};

export const registerController = async (req: Request, res: Response) => {
  const params = req.body as RegisterData;
  const userData = await register(params);
  res.status(200).send(userData);
};
