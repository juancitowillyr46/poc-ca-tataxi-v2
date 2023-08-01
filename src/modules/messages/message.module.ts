import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptModule } from 'src/infrastructure/services/bcrypt/bcrypt.module';
import { MessageEntity } from './message.entity';
import { MESSAGE_REPOSITORY, MessageRepositoryProvider } from './message.repository.provider';
import { CreateMessageUsecase } from 'src/usecases/messages/message-create.usecase';
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [
    MessageRepositoryProvider,
    CreateMessageUsecase
  ],
  exports: [
    MESSAGE_REPOSITORY,
  ],
  controllers: [MessageController]
})
export class MessageModule {}
