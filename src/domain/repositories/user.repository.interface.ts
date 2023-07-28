import { UserModel } from "../models/user.model";

export interface UserRepository {
    create(userData: UserModel): Promise<UserModel>
    readByUsername(username: string): Promise<UserModel>
}