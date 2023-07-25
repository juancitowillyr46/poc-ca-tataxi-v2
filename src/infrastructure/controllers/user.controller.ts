import { Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from 'src/application/services/user.service.interface';
import { User } from '../entities/user.entity';
import { USER_SERVICE } from '../providers/user.service.provider';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: UserService
  ) {}

  @Get('create')
  async createUser(): Promise<User> {
    return this.userService.create({
      email: 'demo1@demo.com',
      id: 0,
      name: 'Demo',
    });
  }
}
