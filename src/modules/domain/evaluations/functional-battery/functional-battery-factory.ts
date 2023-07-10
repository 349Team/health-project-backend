import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { parseType } from 'src/common/utils/parse-type.util';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { CreateFunctionalBatteryDto } from './dto/create-functional-battery.dto';
import { GetFunctionalBatteryDto } from './dto/get-functional-battery.dto';
import { IFunctionalBattery} from './interface/functional-battery.interface';
import { UpdateFunctionalBatteryDto} from './dto/update-functional-battery.dto';
dayjs.extend(customParseFormat);


@Injectable()
export class FunctionalBatteryFactory {
    @InjectRepository(Evaluation)
    private readonly evaluationsRepository: Repository<Evaluation>;


    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>;

    private parseFieldsToString(data:Partial<CreateFunctionalBatteryDto>){
        const values = Object.entries(data);
        const inputs = [];

        values.forEach(([key,value]) =>{
            let type: string = typeof value;
            if(type === 'string') type = dayjs(value).isValid() ? 'date' : 'string';
            if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';

            inputs.push({
                name: key,
                value: String(value),
                dataType: type,
            });
        });

        return inputs;
    }

    private parseFieldsToCorrectType(data: Evaluation): GetFunctionalBatteryDto {
        const { id, name, result, createdAt, updatedAt, deletedAt, fields } = data;

        const parsedFields: Partial<IFunctionalBattery> = {};

        fields.forEach(({ name, value, dataType }) => {
            const formattedValue = parseType(dataType, value);
      
            parsedFields[name] = formattedValue;
        });

        const {date, 
              sitAndDownResult, sitAndDownPercent, sitAndDownClassification, 
              elbowFlexionResult, elbowFlexionPercent, elbowFlexionClassification,
              marchWouldParkResult, marchWouldParkPercent, marchWouldParkClassification,
              sitAndReachYourFeetResult, sitAndReachYourFeetPercent, sitAndReachYourFeetClassification,
              tugResult, tugPercent, tugClassification,
              reachTheBackResult, reachTheBackPercent, reachTheBackClassification,
              } = parsedFields;

        const returnedValues: GetFunctionalBatteryDto = {
            id,
            name,
            createdAt,
            updatedAt,
            deletedAt,
            date,
            sitAndDownResult,
            sitAndDownPercent,
            sitAndDownClassification,
            elbowFlexionResult,
            elbowFlexionPercent,
            elbowFlexionClassification,
            marchWouldParkResult,
            marchWouldParkPercent,
            marchWouldParkClassification,
            sitAndReachYourFeetResult,
            sitAndReachYourFeetPercent,
            sitAndReachYourFeetClassification,
            reachTheBackResult,
            reachTheBackPercent,
            reachTheBackClassification,
            tugResult,
            tugPercent,
            tugClassification,
            result,
        }

        return returnedValues;

    }

    async create(
        input: CreateFunctionalBatteryDto,
        user: User,
        type: string,
        student: Student,
    ): Promise<GetFunctionalBatteryDto>{
        const { ...rest} = input;

        const arrayOfFields = this.parseFieldsToString(rest);

        let evaluation = this.evaluationsRepository.create({
            name: type,
            createdBy: user,
            student,
        });

        evaluation = await this.evaluationsRepository.save(evaluation);

        const fields: Field[] = await Promise.all(
            arrayOfFields.map(async (field)=> {
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

        evaluation = await this.evaluationsRepository.findOne({
            where: { 
                id: id
            },
            relations: ['fields'],
        });

        return this.parseFieldsToCorrectType(evaluation);
    }

    async update(
        id: string,
        qtype: string,
        input: UpdateFunctionalBatteryDto,
        evaluation: Evaluation,
    ): Promise<GetFunctionalBatteryDto> {
      const { ...rest} = input;

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

          evaluation.save();

          return this.parseFieldsToCorrectType(evaluation);
    }   

    async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        studentID: string,
      ): Promise<GetFunctionalBatteryDto[]> {
        const { page, limit } = paginationParams;
    
        const evaluations = await this.evaluationsRepository.find({
          where: {
            name: 'functionalBattery',
            deletedAt: null,
            student: {
              id: studentID,
            },
          },
          skip: (page - 1) * limit,
          take: limit,
          relations: ['fields'],
          order: {
            [orderBy]: 'DESC',
          },
        });
    
        const parsedEvaluations: GetFunctionalBatteryDto[] =
          evaluations.map((item) => {
            return this.parseFieldsToCorrectType(item);
          });
    
        return parsedEvaluations;
      }
    
      async getOne(
        evaluation: Evaluation,
      ): Promise<GetFunctionalBatteryDto> {
        return this.parseFieldsToCorrectType(evaluation);
      }
}