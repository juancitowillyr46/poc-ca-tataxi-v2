import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './infrastructure/configs/typeorm.config';
import { UserModule } from './modules/users/user.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    SecurityModule,
    UserModule
  ]
})
export class AppModule {}
