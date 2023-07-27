import { UserModel } from "src/domain/models/user.model";
import { CreateUserOutput } from "src/usecases/users/user-create.output";

export interface UserService {
    create(userData: UserModel): Promise<CreateUserOutput>;
}