import { MessageModel } from "../models/message.model"

export interface MessageRepository {
    create(messageData: MessageModel): Promise<MessageModel>
    
}