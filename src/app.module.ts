import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './infrastructure/configs/typeorm.config';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule
  ]
})
export class AppModule {}
