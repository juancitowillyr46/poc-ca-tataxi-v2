import { UserEntity } from "src/modules/users/user.entity";
import { UserModel } from "../models/user.model";

export interface UserRepository {
    create(userData: UserModel): Promise<UserEntity>
}