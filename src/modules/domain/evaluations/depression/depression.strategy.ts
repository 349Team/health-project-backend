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
  import { DepressionFactory } from './depression.factory';
  import { DepressionSchema } from './dto/depression.dto';
  import { CreateDepressionDto } from './dto/create-depression.dto';
  import { GetAllDepressionDto } from './dto/get-all-depression.dto';
  import { GetDepressionDto } from './dto/get-depression.dto';
  import { UpdateDepressionDto } from './dto/update-depression.dto';


@Injectable()
export class DepressionStrategy {
    @InjectRepository(Evaluation)
    private readonly evaluationsRepository: Repository<Evaluation>;
    
    constructor(
        private readonly depressionFactory: DepressionFactory,
    ) {}

    async create(
        input: CreateDepressionDto,
        user: User,
        type: string,
        student: Student,
    ): Promise<GetDepressionDto> {
        const validation = DepressionSchema.validate(input);

        if (validation?.error) {
            throw new BadRequestException(validation.error.message);
        }

        const { date, campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8,
                campo9, campo10, campo11, campo12, campo13, campo14, campo15, result } = input

        const data: CreateDepressionDto = {
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
            campo15,
            result,
        };

        return await this.depressionFactory.create(
            data,
            user,
            student,
            type,
        );
    }

    async update(
        id: string,
        type: string,
        input: UpdateDepressionDto,
    ): Promise<GetDepressionDto> {
        const validation = DepressionSchema.validate(input)

        if (validation?.error) {
            throw new Error(validation.error.message)
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

        const { date, campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8,
                campo9, campo10, campo11, campo12, campo13, campo14, campo15, result } = input
        
        const data: UpdateDepressionDto = {
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
            campo15,
            result,
        };

        return await this.depressionFactory.update(
            id,
            type,
            data,
            evaluation,
        );
    }

    async getAll(
        orderBy: EvaluationOrderBy,
        PaginationParams: PaginationParams,
        studentId: string,
      ): Promise<GetAllDepressionDto> {
        const evaluations = await this.depressionFactory.getAll(
          orderBy,
          PaginationParams,
          studentId,
        );
    
        const returnData: GetAllDepressionDto = {
          evaluations,
          count: evaluations.length,
        };
    
        return returnData;
      }
    
      async getByID(id: string): Promise<GetDepressionDto> {
        const evaluation = await this.evaluationsRepository.findOne({
          where: { id, deletedAt: null },
          relations: ['fields'],
        });
    
        if (!evaluation) {
          throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
        }
    
        return this.depressionFactory.getOne(evaluation);
      }
    }
    