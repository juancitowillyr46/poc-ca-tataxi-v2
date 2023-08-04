import { Inject, Injectable } from "@nestjs/common";
import { MESSAGE_REPOSITORY } from "src/modules/messages/message.repository.provider";
import { MessageModel } from "src/domain/models/message.model";
import { CreateMessageDto } from "src/modules/messages/message-create.dto";
import { MessageRepository } from "src/domain/repositories/message.repository.interface";
import { GetAllMessageInput } from "./message-getall.input";
import { GetAllMessageOutput } from "./message-getall.output";

@Injectable()
export class GetAllMessageUsecase {

    constructor(
        @Inject(MESSAGE_REPOSITORY)
        private readonly messageRepository: MessageRepository,
    ) {

    }

    async execute(messageData: GetAllMessageInput): Promise<GetAllMessageOutput> {
        const result: MessageModel[] = await this.messageRepository.getAll(messageData.search);
        return this.toInputArray(result);
    }

    toInputArray(lst: MessageModel[]): GetAllMessageOutput {
        return {
            messages: lst
        }
    }
}