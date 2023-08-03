import { MessageEntity } from "src/modules/messages/message.entity";
import { UserEntity } from "src/modules/users/user.entity";
import { CreateMessageInput } from "src/usecases/messages/create/message-create.input";
import { CreateMessageOutput } from "src/usecases/messages/create/message-create.output";
// import { CreateMessageOutput } from "src/usecases/messages/message-create.output";

export class MessageModel {
    id?: number;
    message: string;
    userId: number;

    public toEntity(messageModel: MessageModel) {
        const entity = new MessageEntity();
        entity.message = messageModel.message;
        entity.created_at = new Date();
        entity.created_by = messageModel.userId;
        entity.deleted_by = null;
        entity.updated_by = null;
        entity.user = { id: messageModel.userId } as UserEntity;
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
        model.userId = input.message.userId;
        return model;
    }

    public toOutput(messageModel: MessageModel): CreateMessageOutput {
        return {
            message: messageModel
        };
    }
}