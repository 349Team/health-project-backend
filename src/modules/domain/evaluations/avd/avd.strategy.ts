import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { avdFactory } from './avd.factory';
import { AvdSchema } from './dto/avd.dto';
import { CreateAvdDto } from './dto/create-avd.dto';
import { GetAllAvdDto } from './dto/get-all-avd.dto';
import { GetAvdDto } from './dto/get-avd.dto';
import { UpdateAvdDto } from './dto/update-avd.dto';

@Injectable()
export class avdStrategy {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;
    
    constructor(
        private readonly avdFactory: avdFactory,
    ) {}

    async create(
        input: CreateAvdDto,
        user: User,
        type: string,
        student: Student,
    ): Promise<GetAvdDto> {
        const validate = AvdSchema.validate(input);

        if (validate?.error) {
            throw new BadRequestException(validate.error.message);
        }

        const { date, bath, dress, bathroom, transfer, salute, feeding, result } = input;

        const data: CreateAvdDto = {
            date,
            bath,
            dress,
            bathroom,
            transfer,
            salute,
            feeding,
            result,
        };

        return await this.avdFactory.create(
            data,
            user,
            type,
            student,
        );
    }
    
    async update(
        id: string,
        type: string,
        input: UpdateAvdDto
    ): Promise<GetAvdDto> {
        const validate = AvdSchema.validate(input);

        if (validate?.error) {
            throw new BadRequestException(validate.error.message);
        }

        const evaluation = await this.evaluationRepository.findOne({
            where: {
                id,
                deletedAt: null,
            },
            relations: ['fields', 'student'],
        });

        if (!evaluation) {
            throw new NotFoundException('Evaluation not found');
        }

        const { date, bath, dress, bathroom, transfer, salute, feeding, result } = input;

        const data: UpdateAvdDto = {
            date,
            bath,
            dress,
            bathroom,
            transfer,
            salute,
            feeding,
            result,
        };

        return await this.avdFactory.update(id, type, data, evaluation);
    }

    async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        studentId: string,
    ): Promise<GetAllAvdDto> {
        const evaluations = await this.avdFactory.getAll(orderBy, paginationParams, studentId);
    
        const returnData: GetAllAvdDto = {
            evaluations,
            count: evaluations.length,
        };

        return returnData;
    }

    async getByID(id: string): Promise<GetAvdDto> {
        const evaluation = await this.evaluationRepository.findOne({
            where: { id, deletedAt: null },
            relations: ['fields'],
        });

        if(!evaluation){
            throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
        }

        return this.avdFactory.getOne(evaluation);
    }
}