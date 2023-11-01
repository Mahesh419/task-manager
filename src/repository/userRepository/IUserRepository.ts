import IBaseRepository from "../IBaseRepository";
import { IUser } from "../../models/user";

export default interface IUserRepository extends IBaseRepository<IUser> {}
