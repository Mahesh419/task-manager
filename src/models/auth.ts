import { Schema } from "mongoose";
import bcrypt from "bcrypt";

function generateSalt(rounds?: number) {
  return bcrypt.genSalt(rounds);
}

export interface IAuth {
  email: string;
  password: string;
  salt?: string;
}

export const AuthSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String },
  },
  { collection: "auth" }
);

AuthSchema.pre("save", async function (next) {
  const salt = await generateSalt();
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  this.salt = salt;
  next();
});
