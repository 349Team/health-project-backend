import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import dayjs from 'dayjs';
  import { PaginationParams } from 'src/common/interfaces/pagination.interface';
  import { User } from 'src/modules/infrastructure/user/entities/user.entity';
  import { Repository } from 'typeorm';
  import { Student } from '../../student/entities/student.entity';
  import { Evaluation } from '../entities/evaluation.entity';
  import { EvaluationOrderBy } from '../enums/order-by.enum';
  import { FunctionalBatteryFactory } from './functional-battery-factory';
  import { functionalBatterySchema } from './dto/functional-battery.dto';
  import { CreateFunctionalBatteryDto } from './dto/create-functional-battery.dto';
  import { GetFunctionalBatteryDto} from './dto/get-functional-battery.dto';
  import {GetAllFunctionalBatteryDto} from './dto/get-all-functional-battery.dto';
  import { UpdateFunctionalBatteryDto} from './dto/update-functional-battery.dto';


@Injectable()
export class FunctionalBatteryStrategy {
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>;

    constructor(
        private readonly functionalBatteryFactory: FunctionalBatteryFactory,
    ) {}

    async create(
        input: CreateFunctionalBatteryDto,
        user: User,
        type: string,
        student: Student,
      ): Promise<GetFunctionalBatteryDto> {
        const validation = functionalBatterySchema.validate(input);
    
        if (validation?.error) {
          throw new BadRequestException(validation.error.message);
        }
    
        const { sex: studentSex, birthDate } = student;
    
        const sex = studentSex === 'M' ? 'Masculino' : 'Feminino';
        const age = dayjs(new Date()).diff(birthDate, 'year');
    
        const { date,
                sitAndDownResult, sitAndDownPercent, sitAndDownClassification, 
                elbowFlexionResult, elbowFlexionPercent, elbowFlexionClassification,
                marchWouldParkResult, marchWouldParkPercent, marchWouldParkClassification,
                sitAndReachYourFeetResult, sitAndReachYourFeetPercent, sitAndReachYourFeetClassification,
                tugResult, tugPercent, tugClassification, 
                reachTheBackResult, reachTheBackPercent, reachTheBackClassification,
                result} = input
    

    
        const data: CreateFunctionalBatteryDto = {
          date,
          sitAndDownResult,
          sitAndDownPercent,
          sitAndDownClassification,
          sitAndReachYourFeetResult,
          sitAndReachYourFeetPercent,
          sitAndReachYourFeetClassification,
          elbowFlexionResult,
          elbowFlexionPercent,
          elbowFlexionClassification,
          marchWouldParkResult,
          marchWouldParkPercent,
          marchWouldParkClassification,
          reachTheBackResult,
          reachTheBackPercent,
          reachTheBackClassification,
          tugResult,
          tugPercent,
          tugClassification,
          result,
        }
    
        return await this.functionalBatteryFactory.create(
          data,
          user,
          type,
          student,
        );
      }

      async update(
        id: string,
        type: string,
        input: UpdateFunctionalBatteryDto,
      ): Promise<GetFunctionalBatteryDto> {
        const validation = functionalBatterySchema.validate(input);
  
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
    
        const { sex: studentSex, birthDate } = evaluation.student;
    
        const sex = studentSex === 'M' ? 'Masculino' : 'Feminino';
        const age = dayjs(new Date()).diff(birthDate, 'year');
    
        const { date,
          sitAndDownResult, sitAndDownPercent, sitAndDownClassification, 
          elbowFlexionResult, elbowFlexionPercent, elbowFlexionClassification,
          marchWouldParkResult, marchWouldParkPercent, marchWouldParkClassification,
          sitAndReachYourFeetResult, sitAndReachYourFeetPercent, sitAndReachYourFeetClassification,
          tugResult, tugPercent, tugClassification,
          reachTheBackResult, reachTheBackPercent, reachTheBackClassification,
          result } = input;
          
          
        const newData: UpdateFunctionalBatteryDto = {
          date,
          sitAndDownResult,
          sitAndDownPercent,
          sitAndDownClassification,
          sitAndReachYourFeetResult,
          sitAndReachYourFeetPercent,
          sitAndReachYourFeetClassification,
          elbowFlexionResult,
          elbowFlexionPercent,
          elbowFlexionClassification,
          marchWouldParkResult,
          marchWouldParkPercent,
          marchWouldParkClassification,
          reachTheBackResult,
          reachTheBackPercent,
          reachTheBackClassification,
          tugResult,
          tugPercent,
          tugClassification,
          result
        };
    
        return await this.functionalBatteryFactory.update(
          id,
          type,
          newData,
          evaluation,
        );
      }
    
      async getAll(
        orderBy: EvaluationOrderBy,
        paginationParams: PaginationParams,
        studentID: string,
      ): Promise<GetAllFunctionalBatteryDto> {
        const evaluations = await this.functionalBatteryFactory.getAll(
          orderBy,
          paginationParams,
          studentID,
        );
    
        const returnedData: GetAllFunctionalBatteryDto = {
          evaluations,
          count: evaluations.length,
        };
    
        return returnedData;
      }
    
      async getByID(id: string): Promise<GetFunctionalBatteryDto> {
        const evaluation = await this.evaluationRepository.findOne({
          where: { id, deletedAt: null },
          relations: ['fields'],
        });
    
        if (!evaluation) {
          throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
        }
    
        return this.functionalBatteryFactory.getOne(evaluation);
      }
    }
    


  
