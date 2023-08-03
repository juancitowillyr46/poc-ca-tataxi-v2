import { ApiProperty } from "@nestjs/swagger";
import { MessageModel } from "src/domain/models/message.model";
import { GetAllMessageInput } from "src/usecases/messages/getall/message-getall.input";
import { GetAllMessageOutput } from "src/usecases/messages/getall/message-getall.output";

export class MessageGetAllPresenter {
    @ApiProperty()
    messages: MessageModel[];

    @ApiProperty()
    done: boolean;
    
    constructor(messageData: GetAllMessageOutput) {
        this.messages = messageData.messages;
        this.done = true;
    }
}