import { Schema } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  dueDate?: Date;
  status: string;
  taskPriority: string;
}

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date },
  status: { type: String, required: true },
  taskPriority: { type: String, required: true },
});
