import { Connection, Model, Document, Query } from "mongoose";
import IBaseRepository from "../IBaseRepository";
import { IAuth, AuthSchema } from "../../models/auth";

class AuthRepository implements IBaseRepository<IAuth> {
  private model: Model<IAuth>;

  constructor(conn: Connection) {
    this.model = conn.model("auth", AuthSchema);
  }

  add(data: Partial<IAuth>): Promise<IAuth> {
    return this.model.create(data);
  }

  getById(id: string): Query<IAuth | null, IAuth> {
    return this.model.findById(id);
  }

  getAll(query: Record<string, any> = {}): Query<IAuth[], IAuth> {
    return this.model.find(query);
  }

  update(id: string, data: Partial<IAuth>): Query<IAuth | null, IAuth> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string): Query<IAuth | null, IAuth> {
    return this.model.findByIdAndRemove(id);
  }

  getByKey(query: { [key: string]: string }): Query<IAuth | null, IAuth> {
    return this.model.findOne(query);
  }
}

export default AuthRepository;
