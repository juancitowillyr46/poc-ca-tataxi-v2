import { Provider } from '@nestjs/common';
import { UserServiceImpl } from './user.service';

export const USER_SERVICE = Symbol('UserService');

export const UserServiceProvider: Provider = {
  provide: USER_SERVICE,
  useClass: UserServiceImpl,
};
