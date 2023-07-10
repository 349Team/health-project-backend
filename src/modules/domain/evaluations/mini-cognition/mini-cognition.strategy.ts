import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { parseType } from 'src/common/utils/parse-type.util';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { MiniCognitionFactory } from './mini-cognition.factory';
import { MiniCognitionSchema } from './dto/mini-cognition.dto';
import { CreateMiniCognitionDto } from './dto/create-mini-cognition.dto';
import { GetMiniCognitionDto } from './dto/get-mini-cognition.dto';
import { GetAllMiniCognitionDto } from './dto/get-all-mini-cognition.dto';
import { UpdateMiniCognitionDto } from './dto/update-mini-cognition.dto';
import { IMiniCognition } from './interface/miniCognition.interface';
import { validateResult } from './helper/validade-result-mini-cognition';

@Injectable()
export class MiniCognitionStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(private readonly miniCognitionFactory: MiniCognitionFactory) {}

  private parseFieldsToCorrectType(data: Evaluation): GetMiniCognitionDto {
    const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;
    const parsedFields: Partial<IMiniCognition> = {};
    fields.forEach(({ name, value, dataType }) => {
      parsedFields[name] = parseType(dataType, value) === 'true';
    });
    parsedFields.result = result;
    const returnedValues: GetMiniCognitionDto = {
      id,
      name,
      createdAt,
      updatedAt,
      deletedAt,
      ...(parsedFields as CreateMiniCognitionDto),
    };
    return returnedValues;
  }

  async create(
    input: CreateMiniCognitionDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetMiniCognitionDto> {
    const validation = MiniCognitionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(
        `Bad Request:\n${validation.error.message}`,
      );
    }

    const validationResult = validateResult(input);
    if (!validationResult) {
      throw new NotFoundException(`Avaliação com o resultado errado`);
    }

    return await this.miniCognitionFactory.create(input, user, type, student);
  }

  async update(
    id: string,
    type: string,
    input: UpdateMiniCognitionDto,
  ): Promise<GetMiniCognitionDto> {
    const validation = MiniCognitionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const evaluation = await this.evaluationRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['fields', 'student'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    const validationResult = validateResult(input as CreateMiniCognitionDto);
    if (!validationResult) {
      throw new NotFoundException(`Avaliação com o resultado errado`);
    }

    return this.parseFieldsToCorrectType(evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetAllMiniCognitionDto> {
    const evaluations = await this.miniCognitionFactory.getAll(
      orderBy,
      paginationParams,
      studentID,
    );

    const returnedData: GetAllMiniCognitionDto = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }

  async getByID(id: string): Promise<GetMiniCognitionDto> {
    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }
    return this.miniCognitionFactory.getOne(evaluation);
  }
}
