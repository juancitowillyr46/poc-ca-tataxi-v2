import { Provider } from '@nestjs/common';
import { UserServiceImpl } from '../services/user.service';

export const USER_SERVICE = 'UserService';

export const UserServiceProvider: Provider = {
  provide: USER_SERVICE,
  useClass: UserServiceImpl,
};
