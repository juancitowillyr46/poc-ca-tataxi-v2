import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { CreateUserDto } from "src/modules/users/user-create.dto";
import { USER_REPOSITORY } from "src/modules/users/user.repository.provider";
import { CreateUserInput } from "./user-create.input";
import { CreateUserOutput } from "./user-create.output";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";

@Injectable()
export class CreateUserUsecase {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,

        private readonly bcryptService: BcryptService
    ) {

    }

    async execute(userData: CreateUserInput): Promise<CreateUserOutput> {
        let userModel = new UserModel();
        const password = await this.bcryptService.hash(userData.user.password);
        userData.user.password = password;
        const result = await this.userRepository.create(userModel.inputToEntity(userData));
        return userModel.toOutput(result);
    }

    toInput(createUserDto: CreateUserDto): CreateUserInput {
        const model = new UserModel();
        model.username = createUserDto.username;
        model.email = createUserDto.email;
        model.fullname = createUserDto.fullname;
        model.password = createUserDto.password;
        return {
            user: model
        }
    }
}