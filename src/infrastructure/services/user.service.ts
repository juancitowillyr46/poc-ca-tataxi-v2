import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service.interface';
import { UserRepository } from 'src/domain/repositories/user.repository.interface';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from '../providers/user.repository.provider';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository
  ) {}

  async create(userData: User): Promise<User> {
    const user = new User();
        user.email = 'Email';
        user.id = 1;
        user.name = 'Name';
        return user;
    return await user;
    // return await this.userRepository.create(userData);
  }

}
