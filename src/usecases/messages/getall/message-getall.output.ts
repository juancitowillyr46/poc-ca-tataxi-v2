import { MessageModel } from "src/domain/models/message.model";

export interface GetAllMessageOutput {
    messages: MessageModel[]
}