import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { Pagination } from 'src/common/decorators/pagination.decorator';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationOrderBy } from './enums/order-by.enum';
import { EvaluationService } from './evaluation.service';
import { ResponseEvaluation } from './types/response-evaluation.type';

@ApiBearerAuth()
@ApiTags('evaluation')
@Controller('evaluation')
@UseGuards(JwtAuthGuard)
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('/:studentId')
  async create(
    @AuthUser() user: User,
    @Param('studentId') studentId: string,
    @Body(new JoiPipe({ group: 'CREATE' }))
    input: CreateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');
    if (!studentId) throw new ForbiddenException('Informe o ID do aluno');

    return await this.evaluationService.create(input, user, studentId);
  }

  @Get('/')
  async findAll(
    @AuthUser() user: User,
    @Pagination() paginationParams: PaginationParams,
    @Query('studentId') studentId: string,
    @Query('orderBy') orderBy: EvaluationOrderBy,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');
    if (!studentId) throw new ForbiddenException('Informe o ID do aluno');

    return new PaginationResponseDto<ResponseEvaluation[]>(
      await this.evaluationService.findAll(
        orderBy,
        paginationParams,
        studentId,
      ),
    );
  }

  @Get('/:id')
  async findOne(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Query('type') type: string,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return await this.evaluationService.getByID(id, type);
  }

  @Patch('/:id')
  async update(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    input: UpdateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return await this.evaluationService.update(id, input);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<Evaluation> {
    return await this.evaluationService.delete(id);
  }
}
