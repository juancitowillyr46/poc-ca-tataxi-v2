import { SearchFilterMessageDto } from "../common/search-message.dto"
import { MessageModel } from "../models/message.model"

export interface MessageRepository {
    create(messageData: MessageModel): Promise<MessageModel>
    getAll(search: SearchFilterMessageDto): Promise<MessageModel[]>
}