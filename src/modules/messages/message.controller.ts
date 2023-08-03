import { Body, Controller, Get, Inject, Post, Query, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/infrastructure/guards/jwtAuth.guard';
import { CreateMessageUsecase } from 'src/usecases/messages/create/message-create.usecase';
import { CreateMessageDto } from './message-create.dto';
import { MessageCreatePresenter } from './message-create.presenter';
import { MessageGetAllPresenter } from './message-getall.presenter';
import { SearchFilterMessageDto } from 'src/domain/common/search-message.dto';
import { GetAllMessageUsecase } from 'src/usecases/messages/getall/message-getall.usecase';

@Controller('messages')
export class MessageController {
  constructor(
    private readonly useCaseCreateMessage: CreateMessageUsecase,
    private readonly useCaseGetAllMessage: GetAllMessageUsecase
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiExtraModels(MessageCreatePresenter)
  @ApiTags('Messages')
  @Post('create')
  @ApiOperation({ summary: 'Create message' })
  async createMessage(@Body() createMessageDto: CreateMessageDto, @Req() request: any): Promise<MessageCreatePresenter> {
    createMessageDto.userId = request.user.id;
    const dto = this.useCaseCreateMessage.toInput(createMessageDto)
    const result = await this.useCaseCreateMessage.execute(dto);
    const operation = new MessageCreatePresenter(result);
    return operation;
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiExtraModels(MessageGetAllPresenter)
  @ApiTags('Get All Message')
  @Get('getall')
  @ApiOperation({ summary: 'Get All Messages' })
  async getAllMessage(@Query() search: SearchFilterMessageDto): Promise<MessageGetAllPresenter> {
    const result = await this.useCaseGetAllMessage.execute({
      search: search
    });
    const operation = new MessageGetAllPresenter(result);
    return operation;
  }
}
