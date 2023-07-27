import { CreateUserDto } from "src/modules/users/user-create.dto";
import { UserEntity } from "src/modules/users/user.entity";

export class UserModel {

    id?: number;
    username: string;
    password: string;
    email: string;
    name: string;

    public toModel(userEntity: UserEntity): UserModel {
        let userModel = new UserModel();
        userModel.id = userEntity.id;
        userModel.username = userEntity.username;
        userModel.email = userEntity.email;
        userModel.name = userEntity.name;
        return userModel;
    }

}