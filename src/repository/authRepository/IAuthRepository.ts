import IBaseRepository from "../IBaseRepository";
import { IAuth } from "../../models/auth";
import { Query } from "mongoose";

export default interface IAuthRepository extends IBaseRepository<IAuth> {
  getByKey(id: string): Query<IAuth | null, IAuth>;
}
