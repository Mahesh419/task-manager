import jwt from "jsonwebtoken";

import { AuthData, RegisterData, TokenData } from "../types/authTypes";
import { IUser } from "../models/user";
import DbConnection from "../connections/mongoConnection";
import UserRepository from "../repository/userRepository/UserRepository";
import AuthRepository from "../repository/authRepository/AuthRepository";

export async function register(registerData: RegisterData): Promise<IUser> {
  try {
    const dbConn = DbConnection.getInstance();
    const connection = dbConn.getConnection();

    const authRepository = new AuthRepository(connection);
    const userRepository = new UserRepository(connection);

    await authRepository.add({
      email: registerData.email,
      password: registerData.password,
    });
    return await userRepository.add({
      email: registerData.email,
      name: registerData.name,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function login(authData: AuthData): Promise<TokenData> {
  try {
    const dbConn = DbConnection.getInstance();
    const connection = dbConn.getConnection();

    const authRepository = new AuthRepository(connection);

    const authDetails = await authRepository.getByKey({
      email: authData.email,
    });
    const idToken = jwt.sign(
      { email: authDetails?.email, iat: Math.floor(Date.now() / 1000) },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    return { idToken };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
