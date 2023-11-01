import { Connection, Model, Document, Query } from "mongoose";
import IBaseRepository from "../IBaseRepository";
import { ITask, TaskSchema } from "../../models/task";

class TaskRepository implements IBaseRepository<ITask> {
  private model: Model<ITask>;

  constructor(conn: Connection) {
    this.model = conn.model("task", TaskSchema);
  }

  add(data: Partial<ITask>): Promise<ITask> {
    return this.model.create(data);
  }

  getById(id: string): Query<ITask | null, ITask> {
    return this.model.findById(id);
  }

  getAll(query: Record<string, any> = {}): Query<ITask[], ITask> {
    return this.model.find(query);
  }

  update(id: string, data: Partial<ITask>): Query<ITask | null, ITask> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string): Query<ITask | null, ITask> {
    return this.model.findByIdAndRemove(id);
  }
}

export default TaskRepository;
