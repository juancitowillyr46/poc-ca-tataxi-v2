import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './message.entity';
import { MESSAGE_REPOSITORY, MessageRepositoryProvider } from './message.repository.provider';
import { CreateMessageUsecase } from 'src/usecases/messages/create/message-create.usecase';
import { MessageController } from './message.controller';
import { GetAllMessageUsecase } from 'src/usecases/messages/getall/message-getall.usecase';


@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [
    MessageRepositoryProvider,
    CreateMessageUsecase,
    GetAllMessageUsecase
  ],
  exports: [
    MESSAGE_REPOSITORY,
  ],
  controllers: [MessageController]
})
export class MessageModule {}
