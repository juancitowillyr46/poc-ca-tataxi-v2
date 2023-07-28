import { CreateUserDto } from "src/modules/users/user-create.dto";
import { UserEntity } from "src/modules/users/user.entity";
import { CreateUserInput } from "src/usecases/users/user-create.input";
import { CreateUserOutput } from "src/usecases/users/user-create.output";

export class UserModel {

    id?: number;
    fullname: string;
    username: string;
    password: string;
    email: string;

    public toEntity(userModel: UserModel) {
        const entity = new UserEntity();
        entity.username = userModel.username;
        entity.email = userModel.email;
        entity.fullname = userModel.fullname;
        entity.password = userModel.password;
        return entity;
    }

    public toModel(userEntity: UserEntity): UserModel {
        let userModel = new UserModel();
        userModel.id = userEntity.id;
        userModel.username = userEntity.username;
        userModel.email = userEntity.email;
        userModel.fullname = userEntity.fullname;
        return userModel;
    }

    public inputToEntity(input: CreateUserInput): UserModel {
        let userModel = new UserModel();
        userModel.username = input.user.username;
        userModel.email = input.user.email;
        userModel.fullname = input.user.fullname;
        userModel.password = input.user.password;
        return userModel;
    }

    public toOutput(userModel: UserModel): CreateUserOutput {
        return {
            user: userModel
        };
    }

}