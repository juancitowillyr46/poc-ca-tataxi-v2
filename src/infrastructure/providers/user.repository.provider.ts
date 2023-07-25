import { Provider } from '@nestjs/common';
import { UserRepositoryImpl } from '../persistences/repositories/database-user.repository';

export const USER_REPOSITORY = 'UserRepository';

export const UserRepositoryProvider: Provider = {
  provide: USER_REPOSITORY,
  useClass: UserRepositoryImpl,
};
