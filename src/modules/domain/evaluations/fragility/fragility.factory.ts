import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { parseType } from 'src/common/utils/parse-type.util';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { CreateFragilityDTO } from './dto/create-fragility.dto';
import { GetFragilityDTO } from './dto/get-fragility.dto';
import { UpdateFragilityDTO } from './dto/update-fragility.dto';
import { IFragility } from './interfaces/fragility.interface';

@Injectable()
export class FragilityFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  private parseFieldsToString(data: Partial<CreateFragilityDTO>) {
    const values = Object.entries(data);
    const inputs = [];

    values.forEach(([key, value]) => {
      let type: string = typeof value;

      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
      if (type === 'string')
        type = dayjs(value as string).isValid() ? 'date' : 'string';

      inputs.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    return inputs;
  }

  private parseFieldToCorrectType(data: Evaluation): GetFragilityDTO {
    const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;
    const parsedFields: Partial<IFragility> = {};

    fields.forEach(({ name, value, dataType }) => {
      parsedFields[name] = parseType(dataType, value);
    });

    const {
      date,
      looseWeight,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      weight,
      time,
      handgripStrength,
      imc,
      score,
    } = parsedFields;

    const returnedValues: GetFragilityDTO = {
      id,
      name,
      date: new Date(date),
      looseWeight,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      weight,
      time,
      handgripStrength,
      imc,
      score,
      result,
      createdAt,
      updatedAt,
      deletedAt,
    };

    return returnedValues;
  }

  async create(
    input: CreateFragilityDTO,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetFragilityDTO> {
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

    return this.parseFieldToCorrectType(evaluation);
  }

  async update(
    id: string,
    type: string,
    input: UpdateFragilityDTO,
    evaluation: Evaluation,
  ): Promise<GetFragilityDTO> {
    const { result, ...rest } = input;
    const arrayOfFields = this.parseFieldsToString(rest);
    const { fields } = evaluation;

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
    evaluation.result = result;

    evaluation.save();

    return this.parseFieldToCorrectType(evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetFragilityDTO[]> {
    const { page, limit } = paginationParams;

    const evaluations = await this.evaluationRepository.find({
      where: {
        name: 'fragilidade',
        deletedAt: null,
        student: { id: studentID },
      },
      skip: (page - 1) * limit,
      take: limit,
      relations: ['fields'],
      order: { [orderBy]: 'DESC' },
    });

    const parsedEvaluations: GetFragilityDTO[] = evaluations.map((item) => {
      return this.parseFieldToCorrectType(item);
    });

    return parsedEvaluations;
  }

  async getOne(evaluation: Evaluation): Promise<GetFragilityDTO> {
    return this.parseFieldToCorrectType(evaluation);
  }
}
