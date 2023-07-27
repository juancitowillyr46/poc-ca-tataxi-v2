import { Provider } from '@nestjs/common';
import { UserRepositoryImpl } from 'src/infrastructure/persistences/repositories/database-user.repository';

export const USER_REPOSITORY = Symbol('UserRepository');

export const UserRepositoryProvider: Provider = {
  provide: USER_REPOSITORY,
  useClass: UserRepositoryImpl,
};
