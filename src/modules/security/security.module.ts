import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUsecase } from 'src/usecases/users/user-create.usecase';
import { SecurityController } from './security.controller';
import { ExceptionsModule } from 'src/infrastructure/exceptions/exceptions.module';
import { UserRepositoryProvider } from '../users/user.repository.provider';
import { UserModule } from '../users/user.module';
import { LoginUsecase } from 'src/usecases/login/login.usecase';
import { BcryptModule } from 'src/infrastructure/services/bcrypt/bcrypt.module';
import { JwtModule } from 'src/infrastructure/services/jwt/jwt.module';
import { AuthValidateUsecase } from 'src/usecases/auth/auth-validate.usecase';

@Module({
  imports: [
    ExceptionsModule,
    UserModule,
    BcryptModule,
    JwtModule
  ],
  providers: [
    LoginUsecase,
    AuthValidateUsecase
  ],
  exports: [
    AuthValidateUsecase
  ],
  controllers: [SecurityController]
})
export class SecurityModule {}
