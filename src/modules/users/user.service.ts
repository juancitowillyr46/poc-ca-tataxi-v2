import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service.interface';
import { UserModel } from 'src/domain/models/user.model';
import { CreateUserOutput } from 'src/usecases/users/user-create.output';
import { CreateUserUsecase } from 'src/usecases/users/user-create.usecase';

@Injectable()
export class UserServiceImpl implements UserService {

  constructor(
    @Inject(CreateUserUsecase)
    private readonly usecase: CreateUserUsecase
  ) {}

  async create(userData: UserModel): Promise<CreateUserOutput> {
    const result = await this.usecase.execute(userData);
    let output: CreateUserOutput = {
      user: userData.toModel(result)
    };
    return output;
  }

}
