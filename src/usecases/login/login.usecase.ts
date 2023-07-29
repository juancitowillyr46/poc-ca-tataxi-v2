import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { USER_REPOSITORY } from "src/modules/users/user.repository.provider";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";
import { SecurityLoginInput } from "./login-input";
import { SecurityLoginOutput } from "./login-output";
import { SecurityLoginDto } from "src/modules/security/security-login.dto";
import { LoginModel } from "src/domain/models/login.model";
import { ExceptionsService } from "src/infrastructure/exceptions/exceptions.service";
import { JwtTokenService } from "src/infrastructure/services/jwt/jwt.service";
import { jwtExpiresIn, jwtSecret } from "src/infrastructure/services/jwt/jwt.module";

@Injectable()
export class LoginUsecase {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
        private readonly bcryptService: BcryptService,
        private readonly exceptionService: ExceptionsService,
        private readonly jwtTokenService: JwtTokenService
    ) {

    }

    async execute(loginData: SecurityLoginInput): Promise<SecurityLoginOutput> {
        
        const command = await this.userRepository.readByUsername(loginData.user.username);

        if(!command) {
            this.exceptionService.UnauthorizedException({
                message: "El usuario no existe"
            });
        }

        const verifiedPassword = await this.bcryptService.compare(loginData.user.password, command.password);

        if(!verifiedPassword) {
            this.exceptionService.UnauthorizedException({
                message: "El usuario no es válido"
            });
        }

        let loginModel = new LoginModel();
        
        let token = this.jwtTokenService.createToken({
            username: command.username
        }, jwtSecret, jwtExpiresIn);
        
        const result = loginModel.toOutput(command, token);

        return result;
    }

    toInput(loginData: SecurityLoginDto): SecurityLoginInput {
        const model = new LoginModel();
        model.username = loginData.username;
        model.password = loginData.password;
        return {
            user: model
        }
    }
}