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
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { BalanceFactory } from './balance.factory';
import { BalanceSchema } from './dto/balance.dto';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { GetAllBalanceDto } from './dto/get-all-balance.dto';
import { GetBalanceDto } from './dto/get-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';

@Injectable()
export class BalanceStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  constructor(private readonly balanceFactory: BalanceFactory) {}

  async create(
    input: CreateBalanceDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetBalanceDto> {
    const validate = BalanceSchema.validate(input);

    if (validate?.error) {
      throw new BadRequestException(validate.error.message);
    }

    const {
      date,
      campo1,
      campo2,
      campo3,
      campo4,
      campo5,
      campo6,
      campo7,
      campo8,
      campo9,
      campo10,
      campo11,
      campo12,
      campo13,
      campo14,
      result,
    } = input;

    const data: CreateBalanceDto = {
      date,
      campo1,
      campo2,
      campo3,
      campo4,
      campo5,
      campo6,
      campo7,
      campo8,
      campo9,
      campo10,
      campo11,
      campo12,
      campo13,
      campo14,
      result,
    };

    return await this.balanceFactory.create(data, user, student, type);
  }

  async update(
    id: string,
    type: string,
    input: UpdateBalanceDto,
  ): Promise<GetBalanceDto> {
    const validate = BalanceSchema.validate(input);

    if (validate?.error) {
      throw new Error(validate.error.message);
    }

    const evaluation = await this.evaluationsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['fields', 'student'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    const {
      date,
      campo1,
      campo2,
      campo3,
      campo4,
      campo5,
      campo6,
      campo7,
      campo8,
      campo9,
      campo10,
      campo11,
      campo12,
      campo13,
      campo14,
      result,
    } = input;

    const data: UpdateBalanceDto = {
      date,
      campo1,
      campo2,
      campo3,
      campo4,
      campo5,
      campo6,
      campo7,
      campo8,
      campo9,
      campo10,
      campo11,
      campo12,
      campo13,
      campo14,
      result,
    };

    return await this.balanceFactory.update(id, type, data, evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    PaginationParams: PaginationParams,
    studentId: string,
  ): Promise<GetAllBalanceDto> {
    const evaluations = await this.balanceFactory.getAll(
      orderBy,
      PaginationParams,
      studentId,
    );

    const returnData: GetAllBalanceDto = {
      evaluations,
      count: evaluations.length,
    };

    return returnData;
  }

  async getById(id: string): Promise<GetBalanceDto> {
    const evaluation = await this.evaluationsRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    return this.balanceFactory.getOne(evaluation);
  }
}
