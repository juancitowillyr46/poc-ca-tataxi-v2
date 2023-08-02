import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SecurityLoginPresenter } from './security-login.presenter';
import { LoginUsecase } from 'src/usecases/login/login.usecase';
import { SecurityLoginDto } from './security-login.dto';

@Controller('security')
export class SecurityController {
  constructor(
    private readonly loginUsecase: LoginUsecase
  ) {}

  @ApiExtraModels(SecurityLoginPresenter)
  @ApiTags('Login')
  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createUser(@Body() loginDto: SecurityLoginDto): Promise<SecurityLoginPresenter> {
    const dto = this.loginUsecase.toInput(loginDto)
    const result = await this.loginUsecase.execute(dto);
    const operation = new SecurityLoginPresenter(result);
    return operation;
  }
}
