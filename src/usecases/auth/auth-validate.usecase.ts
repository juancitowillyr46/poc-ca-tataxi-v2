import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/domain/repositories/user.repository.interface";
import { USER_REPOSITORY } from "src/modules/users/user.repository.provider";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";
import { SecurityLoginDto } from "src/modules/security/security-login.dto";
import { LoginModel } from "src/domain/models/login.model";
import { ExceptionsService } from "src/infrastructure/exceptions/exceptions.service";
import { JwtTokenService } from "src/infrastructure/services/jwt/jwt.service";
import { jwtExpiresIn, jwtSecret } from "src/infrastructure/services/jwt/jwt.module";
import { AuthValidateOutput } from "./auth-validate-output";


@Injectable()
export class AuthValidateUsecase {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ) {

    }

    async execute(username: string): Promise<AuthValidateOutput | null> {
        
        const command = await this.userRepository.readByUsername(username);

        const validate: AuthValidateOutput = {
            done: (!command) 
        };
        
        return validate;
    }

}