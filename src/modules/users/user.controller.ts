import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUsecase } from 'src/usecases/users/user-create.usecase';
import { CreateUserDto } from './user-create.dto';
import { UserCreatePresenter } from './user-create.presenter';

@Controller('users')
export class UserController {
  constructor(
    private readonly useCreateUser: CreateUserUsecase
  ) {}

  // @ApiBearerAuth()
  // @ApiExtraModels(UserModel)
  @ApiExtraModels(UserCreatePresenter)
  @ApiTags('Users')
  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserCreatePresenter> {
    const dto = this.useCreateUser.toInput(createUserDto)
    const result = await this.useCreateUser.execute(dto);
    const operation = new UserCreatePresenter(result);
    return operation;
  }
}
