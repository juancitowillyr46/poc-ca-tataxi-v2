import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { MessageModel } from "src/domain/models/message.model";

export class CreateMessageDto {

    id?: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    message: string;

    @Exclude()
    userId: number;

    public toModel(messageEntity: CreateMessageDto): MessageModel {
        let messageModel = new MessageModel();
        messageModel.id = messageModel.id;
        return messageModel;
    }


}