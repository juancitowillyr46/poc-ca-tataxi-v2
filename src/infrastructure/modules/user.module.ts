import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserRepositoryProvider, USER_REPOSITORY } from '../providers/user.repository.provider';
import { UserServiceProvider, USER_SERVICE } from '../providers/user.service.provider';

@Module({
  imports: [TypeOrmModule.forFeature([User]), User],
  providers: [
    UserRepositoryProvider,
    UserServiceProvider,
  ],
  exports: [
    USER_REPOSITORY,
    USER_SERVICE,
    User
  ]
})
export class UserModule {}
