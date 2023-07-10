import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { parseType } from 'src/common/utils/parse-type.util';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { CreateMiniCognitionDto } from './dto/create-mini-cognition.dto';
import { GetMiniCognitionDto } from './dto/get-mini-cognition.dto';
import { IMiniCognition } from './interface/miniCognition.interface';

dayjs.extend(customParseFormat);

@Injectable()
export class MiniCognitionFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  private parseFieldsToCorrectType(data: Evaluation): GetMiniCognitionDto {
    const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;

    const parsedFields: Partial<IMiniCognition> = {};
    fields.forEach(({ name, value, dataType }) => {
      parsedFields[name] = parseType(dataType, value);
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
    const { result, ...rest } = input;

    const inputs = [];
    Object.entries(rest).forEach(([key, value]) => {
      let ftype: string = typeof value;
      if (ftype === 'number') ftype = Number.isInteger(value) ? 'int' : 'float';
      else if (ftype === 'string')
        ftype = dayjs(value.toString()).isValid() ? 'date' : 'string';

      inputs.push({
        name: key,
        value: String(value),
        dataType: ftype,
      });
    });

    let evaluation = this.evaluationsRepository.create({
      name: type,
      result: result.toString(),
      createdBy: user,
      student,
    });

    evaluation = await this.evaluationsRepository.save(evaluation);

    const fields: Field[] = await Promise.all(
      inputs.map(async (field) => {
        const entityField = this.fieldRepository.create({
          ...field,
          evaluation,
        } as Field);

        return await this.fieldRepository.save(entityField);
      }),
    );

    evaluation.fields = fields;

    await evaluation.save();

    return this.parseFieldsToCorrectType(evaluation);
  }

  async update(
    id: string,
    type: string,
    input: CreateMiniCognitionDto,
    evaluation: Evaluation,
  ): Promise<GetMiniCognitionDto> {
    const { result, ...rest } = input;
    const { fields } = evaluation;

    const arrayOfFields = [];
    Object.entries(rest).forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
      else if (type === 'string')
        type = dayjs(value.toString()).isValid() ? 'date' : 'string';

      arrayOfFields.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    await Promise.all(
      arrayOfFields.map((field, idx) => {
        const newField: Field = fields[idx];

        newField.name = field.name;
        newField.value = field.value;
        newField.dataType = field.dataType;

        return this.fieldRepository.update(newField.id, newField);
      }),
    );

    evaluation.updatedAt = new Date();
    evaluation.result = result.toString();

    evaluation.save();

    return this.parseFieldsToCorrectType(evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetMiniCognitionDto[]> {
    const { page, limit } = paginationParams;

    const evaluation = await this.evaluationsRepository.find({
      where: {
        name: 'MiniCognition',
        deletedAt: null,
        student: {
          id: studentID,
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      relations: ['fields']
    });

    const parsedEvaluations: GetMiniCognitionDto[] = evaluation.map((item) => {
      const field = {};
      field['id'] = item.id;
      field['name'] = item.name;
      field['createdAt'] = item.createdAt;
      field['updatedAt'] = item.updatedAt;
      field['deletedAt'] = item.deletedAt;
      item.fields.forEach(({ name, value, dataType }) => {
        field[name] = parseType(dataType, value);
      });
      field['result'] = item.result;
      return field as GetMiniCognitionDto;
    });
    return parsedEvaluations;
  }

  async getOne(evaluation: Evaluation): Promise<GetMiniCognitionDto> {
    return this.parseFieldsToCorrectType(evaluation);
  }
}
