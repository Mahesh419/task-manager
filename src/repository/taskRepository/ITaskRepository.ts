import IBaseRepository from "../IBaseRepository";
import { ITask } from "../../models/task";

export default interface ITaskRepository extends IBaseRepository<ITask> {}
