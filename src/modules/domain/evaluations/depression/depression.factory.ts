import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import dayjs from "dayjs";
import { Evaluation } from "../entities/evaluation.entity";
import { Field } from "../entities/field.entity";
import { Repository } from 'typeorm';
import { CreateDepressionDto } from "./dto/create-depression.dto";
import { GetDepressionDto } from "./dto/get-depression.dto";
import { IDepression } from "./interface/depression.interface";
import { parseType } from "src/common/utils/parse-type.util";
import { Student } from "../../student/entities/student.entity";
import { User } from "src/modules/infrastructure/user/entities/user.entity";
import { UpdateDepressionDto } from "./dto/update-depression.dto";
import { EvaluationOrderBy } from "../enums/order-by.enum";
import { PaginationParams } from "src/common/interfaces/pagination.interface";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
@Injectable()
export class DepressionFactory {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;

    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>;

    private parseFieldsToString(
        data: Partial<CreateDepressionDto>,
    ) {
        const fields = Object.entries(data);
        const inputs = [];
        fields.forEach(([key, value]) => {
            let type: string = typeof value;
            if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
            if (type === 'string') type = dayjs(String(value)).isValid() ? 'date' : 'string';
      
            inputs.push({
              name: key,
              value: String(value),
              dataType: type
            });
        });

        return inputs;
    }

    private parseFieldsToCorrectType(
        data: Evaluation
      ): GetDepressionDto {
        const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;
    
        const parsedFields: Partial<IDepression> = {};
    
        fields.forEach(({ name, value, dataType }) => {
            const formattedValue = parseType(dataType, value);
    
            parsedFields[name] = formattedValue;
        });
    
        const { date, campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, 
                campo10, campo11, campo12, campo13, campo14, campo15} = parsedFields;
            
        const returnedValues: GetDepressionDto = {
            id,
            name,
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
            createdAt,
            updatedAt,
            deletedAt,
        };
    
        return returnedValues;
    }

    async create(
        input: CreateDepressionDto,
        user: User,
        student: Student,
        type: string,
    ): Promise<GetDepressionDto> {
        const { result, ...rest } = input;

        const arrayOfFields = this.parseFieldsToString(rest);

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
        const { id } = evaluation;
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
        input: UpdateDepressionDto,
        evaluation: Evaluation,
    ): Promise<GetDepressionDto> {
        const { result, ...rest } = input;

        const fieldsArray = this.parseFieldsToString(rest);

        const { fields } = evaluation;

        await Promise.all(
            fieldsArray.map((field, index) => {
                const newField: Field = fields[index];
                newField.name = field.name;
                newField.value = field.value;
                newField.dataType = field.dataType;
                
                return this.fieldRepository.update(newField.id, newField);
            }),
        );

        evaluation.updatedAt = new Date();
        evaluation.result = result;
        evaluation.save();

        return this.parseFieldsToCorrectType(evaluation);
    }

    async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        studentId: string,
    ): Promise<GetDepressionDto[]> {
        const { page, limit } = paginationParams;

        const evaluations = await this.evaluationRepository.find({
            where: {
                name: 'Depression',
                deletedAt: null,
                student: {
                    id: studentId,
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            relations: ['fields'],
            order: {
                [orderBy]: 'DESC',
            },
        });

        const parsedEvaluation: GetDepressionDto[] = evaluations.map((item) => {
            return this.parseFieldsToCorrectType(item);
        });

        return parsedEvaluation;

    }

    async getOne(
        evaluationId: Evaluation,
    ): Promise<GetDepressionDto> {
        return this.parseFieldsToCorrectType(evaluationId);
    }
}