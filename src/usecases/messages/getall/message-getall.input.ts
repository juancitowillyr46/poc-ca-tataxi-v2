import { SearchFilterMessageDto } from "src/domain/common/search-message.dto";
import { MessageModel } from "src/domain/models/message.model";

export interface GetAllMessageInput {
    search: SearchFilterMessageDto
}