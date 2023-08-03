import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SearchFilterMessageDto } from "src/domain/common/search-message.dto";
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

    async getAll(search: SearchFilterMessageDto): Promise<MessageModel[]> {
        
        const result = this.messageRepository.findBy({
            user: {
                id: search.userId
            }
        });

        const messageData = new MessageModel();
        const lst: MessageModel[] = [];
        (await result).forEach(message => {
            lst.push(messageData.toModel(message));
        });

        return lst;
    }

    async create(messageData: MessageModel): Promise<MessageModel> {
        const data = messageData.toEntity(messageData);
        const save = (await this.messageRepository.save(data));
        const result = messageData.toModel(save);
        return result;
    }

}