import { ApiProperty } from "@nestjs/swagger";
import { SecurityLoginInput } from "src/usecases/security/security-login.input";

export class SecurityLoginPresenter {
    @ApiProperty()
    message: string;

    @ApiProperty()
    done: boolean;

    @ApiProperty()
    token: string;
    
    constructor(login: SecurityLoginInput) {
        this.message = `Bienvenido: ${login.user.username}`;
        this.done = true;
        this.token = login.user.token;
    }
}