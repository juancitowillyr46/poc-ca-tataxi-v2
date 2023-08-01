import { MessageEntity } from "src/modules/messages/message.entity";
import { CreateMessageInput } from "src/usecases/messages/message-create.input";
import { CreateMessageOutput } from "src/usecases/messages/message-create.output";

export class MessageModel {
    id?: number;
    message: string;

    public toEntity(messageModel: MessageModel) {
        const entity = new MessageEntity();
        entity.message = messageModel.message;
        return entity;
    }

    public toModel(userEntity: MessageEntity): MessageModel {
        let model = new MessageModel();
        model.message = userEntity.message;
        return model;
    }

    public inputToEntity(input: CreateMessageInput): MessageModel {
        let model = new MessageModel();
        model.message = input.message.message;
        return model;
    }

    public toOutput(messageModel: MessageModel): CreateMessageOutput {
        return {
            message: messageModel
        };
    }
}