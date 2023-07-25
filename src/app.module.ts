import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './infrastructure/configs/typeorm.config';
import { UserController } from './infrastructure/controllers/user.controller';
import { User } from './infrastructure/entities/user.entity';
import { UserModule } from './infrastructure/modules/user.module';
import { UserRepositoryImpl } from './infrastructure/persistences/repositories/database-user.repository';
import { UserRepositoryProvider } from './infrastructure/providers/user.repository.provider';
import { UserServiceProvider } from './infrastructure/providers/user.service.provider';
import { UserServiceImpl } from './infrastructure/services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule
  ],
  controllers: [UserController]
})
export class AppModule {}
