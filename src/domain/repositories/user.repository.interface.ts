import { User } from "src/infrastructure/entities/user.entity";

export interface UserRepository {
    create(userData: User): Promise<User>
}