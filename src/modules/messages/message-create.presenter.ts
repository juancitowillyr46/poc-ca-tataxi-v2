import { ApiProperty } from "@nestjs/swagger";
import { CreateMessageInput } from "src/usecases/messages/message-create.input";

export class MessageCreatePresenter {
    @ApiProperty()
    message: string;

    @ApiProperty()
    done: boolean;
    
    constructor(messageData: CreateMessageInput) {
        this.message = `El mensaje: ${messageData.message.message}, se creó satisfactoriamente`;
        this.done = true;
    }
}