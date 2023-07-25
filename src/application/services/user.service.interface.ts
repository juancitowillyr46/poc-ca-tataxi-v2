import { User } from "src/infrastructure/entities/user.entity";

export interface UserService {
    create(userData: User): Promise<User>;
}