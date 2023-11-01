import { Query } from "mongoose";

interface IBaseRepository<T> {
  add(data: Partial<T>): Promise<T>;
  getById(id: string): Query<T | null, T>;
  getAll(query?: Record<string, any>): Query<T[], T>;
  update(id: string, data: Partial<T>): Query<T | null, T>;
  delete(id: string): Query<T | null, T>;
}

export default IBaseRepository;
