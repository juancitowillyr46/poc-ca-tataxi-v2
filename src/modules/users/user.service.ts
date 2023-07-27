import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service.interface';
import { UserModel } from 'src/domain/models/user.model';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { CreateUserOutput } from 'src/usecases/users/user-create.output';
import { USER_REPOSITORY } from './user.repository.provider';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository
  ) {}

  async create(userData: UserModel): Promise<CreateUserOutput> {
    const result = await this.userRepository.create(userData);
    const output: CreateUserOutput = {
      user: userData.toEntity(result)
    };
    return output;
  }

}
