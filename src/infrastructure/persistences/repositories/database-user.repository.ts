import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { User } from "src/infrastructure/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    async create(userData: User): Promise<User> {
        const user = new User();
        user.email = 'Email';
        user.id = 1;
        user.name = 'Name';
        return user;
    }

}