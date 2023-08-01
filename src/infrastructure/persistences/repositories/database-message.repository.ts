import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageModel } from "src/domain/models/message.model";
import { UserModel } from "src/domain/models/user.model";
import { MessageRepository } from "src/domain/repositories/message.repository.interface";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { MessageEntity } from "src/modules/messages/message.entity";
import { UserEntity } from "src/modules/users/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class MessageRepositoryImpl implements MessageRepository {

    constructor(
        @InjectRepository(MessageEntity)
        private messageRepository: Repository<MessageEntity>,
    ) {}

    async create(messageData: MessageModel): Promise<MessageModel> {
        const data = messageData.toEntity(messageData);
        const save = (await this.messageRepository.save(data));
        const result = messageData.toModel(save);
        return result;
    }

}