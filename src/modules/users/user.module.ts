import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';

import { UserRepositoryProvider, USER_REPOSITORY } from './user.repository.provider';
import { UserServiceProvider, USER_SERVICE } from './user.service.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserRepositoryProvider,
    UserServiceProvider,
  ],
  exports: [
    USER_REPOSITORY,
    USER_SERVICE
  ],
  controllers: [UserController]
})
export class UserModule {}
