import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "src/domain/models/user.model";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { UserEntity } from "src/modules/users/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepositoryImpl implements UserRepository {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    async create(userData: UserModel): Promise<UserModel> {
        const data = userData.toEntity(userData);
        const save = (await this.userRepository.save(data));
        const result = userData.toModel(save);
        return result;
    }

}