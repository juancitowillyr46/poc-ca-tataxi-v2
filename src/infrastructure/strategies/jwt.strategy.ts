import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { jwtSecret } from '../services/jwt/jwt.module';
import { ExceptionsService } from '../exceptions/exceptions.service';
import { AuthValidateUsecase } from 'src/usecases/auth/auth-validate.usecase';

type payloadJwt = {
    username: string
    id: number
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authValidateUsecase: AuthValidateUsecase,
    private readonly exceptionService: ExceptionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: payloadJwt) {
    const operation = await this.authValidateUsecase.execute(payload.username);
    if(!operation) {
      this.exceptionService.UnauthorizedException({ message: 'User not found' });
    }
    return { username: payload.username, id: payload.id };
  }
}