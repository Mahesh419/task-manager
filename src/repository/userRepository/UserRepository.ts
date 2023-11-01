import { Connection, Model, Document, Query } from "mongoose";
import IBaseRepository from "../IBaseRepository";
import { IUser, UserSchema } from "../../models/user";

class UserRepository implements IBaseRepository<IUser> {
  private model: Model<IUser>;

  constructor(conn: Connection) {
    this.model = conn.model("user", UserSchema);
  }

  add(data: Partial<IUser>): Promise<IUser> {
    return this.model.create(data);
  }

  getById(id: string): Query<IUser | null, IUser> {
    return this.model.findById(id);
  }

  getAll(query: Record<string, any> = {}): Query<IUser[], IUser> {
    return this.model.find(query);
  }

  update(id: string, data: Partial<IUser>): Query<IUser | null, IUser> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string): Query<IUser | null, IUser> {
    return this.model.findByIdAndRemove(id);
  }
}

export default UserRepository;
