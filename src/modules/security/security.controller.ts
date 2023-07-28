import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SecurityLoginPresenter } from './security-login.presenter';
import { SecurityLoginUsecase } from 'src/usecases/security/security-login.usecase';
import { SecurityLoginDto } from './security-login.dto';

@Controller('Security')
export class SecurityController {
  constructor(
    private readonly loginUsecase: SecurityLoginUsecase
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
