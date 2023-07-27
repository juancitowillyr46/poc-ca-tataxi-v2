import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/application/services/user.service.interface';
import { UserModel } from 'src/domain/models/user.model';
import { CreateUserOutput } from 'src/usecases/users/user-create.output';
import { CreateUserDto } from './user-create.dto';
import { UserCreatePresenter } from './user.create.presenter';
import { USER_SERVICE } from './user.service.provider';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: UserService
  ) {}

  // @ApiBearerAuth()
  @ApiExtraModels(UserModel)
  @ApiExtraModels(UserCreatePresenter)
  @ApiTags('users')
  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserCreatePresenter> {
    const userModel:UserModel =  createUserDto.toModel(createUserDto);
    const result = await this.userService.create(userModel);
    const operation = new UserCreatePresenter(result.user);
    return operation;
  }
}
