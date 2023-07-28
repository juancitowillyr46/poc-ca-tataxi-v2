import { ApiProperty } from "@nestjs/swagger";
import { CreateUserInput } from "src/usecases/users/user-create.input";

export class UserCreatePresenter {
    @ApiProperty()
    message: string;

    @ApiProperty()
    done: boolean;
    
    constructor(userData: CreateUserInput) {
        this.message = `El usuario: ${userData.user.username}, se creó satisfactoriamente`;
        this.done = true;
    }
}