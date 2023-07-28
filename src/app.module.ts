import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './infrastructure/configs/typeorm.config';
import { UserModule } from './modules/users/user.module';
import { BcryptModule } from './infrastructure/services/bcrypt/bcrypt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    //BcryptModule,
    UserModule
  ]
})
export class AppModule {}
