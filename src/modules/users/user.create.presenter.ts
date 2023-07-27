import { ApiProperty } from "@nestjs/swagger";
import { UserModel } from "src/domain/models/user.model";

export class UserCreatePresenter {
    @ApiProperty()
    username: string;

    constructor(userModel: UserModel) {
        this.username = userModel.username;
    }
}