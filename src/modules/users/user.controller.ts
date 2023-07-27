import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/application/services/user.service.interface';
import { UserModel } from 'src/domain/models/user.model';
import { CreateUserOutput } from 'src/usecases/users/user-create.output';
import { CreateUserDto } from './user-create.dto';
import { USER_SERVICE } from './user.service.provider';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: UserService
  ) {}

  // @ApiBearerAuth()
  @ApiTags('users')
  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserOutput> {
    console.log("Guardado...");
    const userModel = new UserModel();
    userModel.username = createUserDto.username;
    userModel.name = createUserDto.name;
    userModel.password = createUserDto.password;
    userModel.email = createUserDto.email;
    return await this.userService.create(userModel);
  }
}
