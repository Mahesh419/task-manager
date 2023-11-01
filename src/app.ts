import express, { Request, Response } from "express";
import authRouter from "./routes/authRoute";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.get("/api/v1", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Connected successfully!!" });
});

export default app;
