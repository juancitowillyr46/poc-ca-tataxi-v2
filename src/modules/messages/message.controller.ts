import { Body, Controller, Get, Inject, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/guards/jwtAuth.guard';
import { CreateMessageUsecase } from 'src/usecases/messages/message-create.usecase';
import { CreateMessageDto } from './message-create.dto';
import { MessageCreatePresenter } from './message-create.presenter';

@Controller('messages')
export class MessageController {
  constructor(
    private readonly useCreateMessage: CreateMessageUsecase
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiExtraModels(MessageCreatePresenter)
  @ApiTags('Messages')
  @Post('create')
  @ApiOperation({ summary: 'Create message' })
  async createUser(@Body() createMessageDto: CreateMessageDto, @Req() request: any): Promise<MessageCreatePresenter> {
    createMessageDto.userId = request.user.id;
    const dto = this.useCreateMessage.toInput(createMessageDto)
    const result = await this.useCreateMessage.execute(dto);
    const operation = new MessageCreatePresenter(result);
    return operation;
  }
}
