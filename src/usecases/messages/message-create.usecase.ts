import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "src/domain/models/user.model";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";
import { MESSAGE_REPOSITORY } from "src/modules/messages/message.repository.provider";
import { CreateMessageInput } from "./message-create.input";
import { CreateMessageOutput } from "./message-create.output";
import { MessageModel } from "src/domain/models/message.model";
import { CreateMessageDto } from "src/modules/messages/message-create.dto";
import { MessageRepository } from "src/domain/repositories/message.repository.interface";

@Injectable()
export class CreateMessageUsecase {

    constructor(
        @Inject(MESSAGE_REPOSITORY)
        private readonly messageRepository: MessageRepository,
    ) {

    }

    async execute(messageData: CreateMessageInput): Promise<CreateMessageOutput> {
        let messageModel = new MessageModel();
        const result = await this.messageRepository.create(messageModel.inputToEntity(messageData));
        return messageModel.toOutput(result);
    }

    toInput(createMessageDto: CreateMessageDto): CreateMessageOutput {
        const model = new MessageModel();
        model.message = createMessageDto.message;
        return {
            message: model
        }
    }
}