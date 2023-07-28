import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { CreateUserDto } from "src/modules/users/user-create.dto";
import { USER_REPOSITORY } from "src/modules/users/user.repository.provider";
import { CreateUserInput } from "./user-create.input";
import { CreateUserOutput } from "./user-create.output";

@Injectable()
export class CreateUserUsecase {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ) {

    }

    async execute(userData: CreateUserInput): Promise<CreateUserOutput> {
        const userModel = new UserModel();
        const result = await this.userRepository.create(userModel.inputToEntity(userData));
        return userModel.toOutput(result);
    }

    toInput(createUserDto: CreateUserDto): CreateUserInput {
        const model = new UserModel();
        model.name = createUserDto.name;
        model.username = createUserDto.username;
        model.email = createUserDto.email;
        model.password = createUserDto.password;
        return {
            user: model
        }
    }
}