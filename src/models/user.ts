import { Schema } from "mongoose";

export interface IUser {
  email: string;
  name: string;
}

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});
