import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUsecase } from 'src/usecases/users/user-create.usecase';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';

import { UserRepositoryProvider, USER_REPOSITORY } from './user.repository.provider';
import { UserServiceProvider, USER_SERVICE } from './user.service.provider';
import { BcryptModule } from 'src/infrastructure/services/bcrypt/bcrypt.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), BcryptModule],
  providers: [
    UserRepositoryProvider,
    UserServiceProvider,
    CreateUserUsecase
  ],
  exports: [
    USER_REPOSITORY,
    USER_SERVICE
  ],
  controllers: [UserController]
})
export class UserModule {}
