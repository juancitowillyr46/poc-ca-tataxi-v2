import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { UserEntity } from "src/modules/users/user.entity";
import { USER_REPOSITORY } from "src/modules/users/user.repository.provider";

@Injectable()
export class CreateUserUsecase {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ) {

    }

    async execute(userData: UserModel): Promise<UserEntity> {
        const result = await this.userRepository.create(userData);
        return result;
    }
}