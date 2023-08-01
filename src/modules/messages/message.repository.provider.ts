import { Provider } from '@nestjs/common';
import { MessageRepositoryImpl } from 'src/infrastructure/persistences/repositories/database-message.repository';
import { UserRepositoryImpl } from 'src/infrastructure/persistences/repositories/database-user.repository';

export const MESSAGE_REPOSITORY = Symbol('MessageRepository');

export const MessageRepositoryProvider: Provider = {
  provide: MESSAGE_REPOSITORY,
  useClass: MessageRepositoryImpl,
};
