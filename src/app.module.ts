import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './infrastructure/configs/typeorm.config';
import { UserModule } from './modules/users/user.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule
  ]
})
export class AppModule {}
