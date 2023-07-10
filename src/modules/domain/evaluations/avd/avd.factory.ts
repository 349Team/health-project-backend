import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { CreateAvdDto } from './dto/create-avd.dto';
import dayjs from 'dayjs';
import { GetAvdDto } from './dto/get-avd.dto';
import { IAVD } from './interface/avd.interface';
import { parseType } from 'src/common/utils/parse-type.util';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Student } from '../../student/entities/student.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';

@Injectable()
export class avdFactory {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;

    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>;

    private parseFieldToString(
        data: Partial<CreateAvdDto>
    )   {
        const values = Object.entries(data);
        const inputs = [];

        values.forEach(([key, value]) => {
            let type: string = typeof value;
            if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
            if (type === 'string') type = dayjs(value).isValid() ? 'date' : 'string';
        
            inputs.push({
                name: key,
                value: String(value),
                dataType: type,
            });
        });
        
        return inputs;
    }

    private parseFieldsToCorrectType(
        data: Evaluation
    ): GetAvdDto {
        const { id, name, createdAt, updatedAt, deletedAt, result, fields } = data;

        const parsedFields: Partial<IAVD> = {};

        fields.forEach(({ name, value, dataType }) => {
            const formattedValue = parseType(dataType, value);

            parsedFields[name] = formattedValue;
        });

        const { date, bath, dress, bathroom, transfer, salute, feeding } = parsedFields;

        const returnData: GetAvdDto = {
            id,
            name,
            date,
            bath,
            dress,
            bathroom,
            transfer,
            salute,
            feeding,
            result,
            createdAt,
            updatedAt,
            deletedAt,
        };

        return returnData;
    }

    async create(
        input: CreateAvdDto,
        user: User,
        type: string,
        student: Student,
    ): Promise<GetAvdDto> {
        const { result, ...rest } = input;

        const arrayOfFields = this.parseFieldToString(rest);

        let evaluation = this.evaluationRepository.create({
            name: type,
            result,
            createdBy: user,
            student,
        });
        
        evaluation = await this.evaluationRepository.save(evaluation);

        const fields: Field[] = await Promise.all(
            arrayOfFields.map(async (field) => {
                const entityField = this.fieldRepository.create({
                    ...field,
                    evaluation,
                } as Field);

                return await this.fieldRepository.save(entityField);
            }),
        );

        evaluation.fields = fields;
        const { id } = evaluation
        await evaluation.save();

        evaluation = await this.evaluationRepository.findOne({
            where: {
                id: id,
            },
            relations: ['fields'],
        });

        return this.parseFieldsToCorrectType(evaluation);
    }

    async update(
        id: string,
        type: string,
        input: CreateAvdDto,
        evaluation: Evaluation,
    ): Promise<GetAvdDto> {
        const { result, ...rest } = input;
        
        const fieldArray = this.parseFieldToString(rest);

        const { fields } = evaluation;

        await Promise.all(
            fieldArray.map((field, index) => {
                const entityField: Field = fields[index];
                
                entityField.name = field.name;
                entityField.value = field.value;
                entityField.dataType = field.dataType;

                return this.fieldRepository.update(entityField.id, entityField);
            }),
        );
            
        evaluation.updatedAt = new Date();
        evaluation.result = result

        evaluation.save();

        return this.parseFieldsToCorrectType(evaluation);
    }

    async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        student: string,
    ): Promise<GetAvdDto[]> {
        const { page, limit } = paginationParams;

        const evaluations = await this.evaluationRepository.find({
            where: {
                name: 'AVD',
                deletedAt: null,
                student: {
                    id: student,
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            relations: ['fields'],
            order: {
                [orderBy]: 'DESC',
            },
        });

        const parsedEvaluations: GetAvdDto[] = evaluations.map((item) => {
            return this.parseFieldsToCorrectType(item);
        });

        return parsedEvaluations;
    }

    async getOne(
        evaluation: Evaluation,
    ): Promise<GetAvdDto> {
        return this.parseFieldsToCorrectType(evaluation);
    }
}