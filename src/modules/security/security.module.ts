import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserUsecase } from 'src/usecases/users/user-create.usecase';
import { SecurityController } from './security.controller';
import { ExceptionsModule } from 'src/infrastructure/exceptions/exceptions.module';
import { UserRepositoryProvider } from '../users/user.repository.provider';
import { UserModule } from '../users/user.module';
import { SecurityLoginUsecase } from 'src/usecases/security/security-login.usecase';
import { BcryptModule } from 'src/infrastructure/services/bcrypt/bcrypt.module';
import { JwtModule } from 'src/infrastructure/services/jwt/jwt.module';

@Module({
  imports: [
    ExceptionsModule,
    UserModule,
    BcryptModule,
    JwtModule
  ],
  providers: [
    SecurityLoginUsecase
  ],
  exports: [
  
  ],
  controllers: [SecurityController]
})
export class SecurityModule {}
