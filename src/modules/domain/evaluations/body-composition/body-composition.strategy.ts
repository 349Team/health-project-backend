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
import { BodyCompositionFactory } from './body-composition.factory';
import { BodyCompositionSchema } from './dto/body-composition.dto';
import { CreateBodyCompositionDto } from './dto/create-body-composition.dto';
import { GetAllBodyCompositionDto } from './dto/get-all-body-composition.dto';
import { GetBodyCompositionDto } from './dto/get-body-composition.dto';
import { UpdateBodyCompositionDto } from './dto/update-body-composition.dto';
import {
  calculateBodyCompositionResult,
  ResultCalculateBodyCompositionResult,
} from './helpers/calculate-body-composition-result';
import { calculateBodyFat } from './helpers/calculate-body-fat';
import { calculateDensity } from './helpers/calculate-density';
import { calculateImc } from './helpers/calculate-imc';
import { IBodyComposition } from './interface/body-composition.interface';

@Injectable()
export class BodyCompositionStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(
    private readonly bodyCompositionFactory: BodyCompositionFactory,
  ) {}

  private recalculateResult({
    sex,
    waistEstature,
    waistHip,
  }: Partial<IBodyComposition>) {
    const result = calculateBodyCompositionResult({
      sex,
      waistEstature,
      waistHip,
    });

    return result;
  }

  private validateResult(
    cardiovascularRisk: ResultCalculateBodyCompositionResult,
    input: Partial<IBodyComposition>,
  ) {
    const { waistCircumference, rcq } = cardiovascularRisk;

    const {
      density,
      bodyFat,
      sex,
      waistEstature,
      waistHip,
      sumPleats,
      weight,
      height,
      imc,
    } = input;

    const calculatedDensity = calculateDensity({ sex, sumPleats });

    if (calculatedDensity !== density) return false;

    const calculatedBodyFat = calculateBodyFat(density);

    if (calculatedBodyFat !== bodyFat) return false;

    const calculatedIMC = calculateImc({ weight, height });

    if (calculatedIMC !== imc) return false;

    const recalculatedResult = this.recalculateResult({
      sex,
      waistHip,
      waistEstature,
    });

    if (
      recalculatedResult.rcq !== rcq ||
      recalculatedResult.waistCircumference !== waistCircumference
    ) {
      return false;
    }

    return true;
  }

  async create(
    input: CreateBodyCompositionDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetBodyCompositionDto> {
    const validation = BodyCompositionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const { sex: studentSex, stature: height } = student;

    const sex = studentSex === 'M' ? 'Masculino' : 'Feminino';

    const {
      date,
      weight,
      waist,
      hip,
      waistEstature,
      waistHip,
      imc,
      scapula,
      triceps,
      biceps,
      suprailiac,
      sumPleats,
      density,
      bodyFat,
      mg,
      mcm,
      minimumWeight,
      maximumWeight,
      cardiovascularRisk,
    } = input;

    const isResultValid = this.validateResult(cardiovascularRisk, {
      density,
      bodyFat,
      sex,
      waistEstature,
      waistHip,
      sumPleats,
      weight,
      height,
      imc,
    });

    if (!isResultValid)
      throw new BadRequestException(
        'Resultado inválido de acordo com os dados repassados',
      );

    const data: CreateBodyCompositionDto = {
      date,
      weight,
      waist,
      hip,
      waistEstature,
      waistHip,
      imc,
      scapula,
      triceps,
      biceps,
      suprailiac,
      sumPleats,
      density,
      bodyFat,
      mg,
      mcm,
      minimumWeight,
      maximumWeight,
      cardiovascularRisk,
    };

    return await this.bodyCompositionFactory.create(data, user, type, student);
  }

  async update(
    id: string,
    type: string,
    input: UpdateBodyCompositionDto,
  ): Promise<GetBodyCompositionDto> {
    const validation = BodyCompositionSchema.validate(input);

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

    const { sex: studentSex, stature: height } = evaluation.student;

    const sex = studentSex === 'M' ? 'Masculino' : 'Feminino';

    const {
      date,
      weight,
      waist,
      hip,
      waistEstature,
      waistHip,
      imc,
      scapula,
      triceps,
      biceps,
      suprailiac,
      sumPleats,
      density,
      bodyFat,
      mg,
      mcm,
      minimumWeight,
      maximumWeight,
      cardiovascularRisk,
    } = input;

    const isResultValid = this.validateResult(cardiovascularRisk, {
      density,
      bodyFat,
      sex,
      waistEstature,
      waistHip,
      sumPleats,
      weight,
      height,
      imc,
    });

    if (!isResultValid)
      throw new BadRequestException(
        'Resultado inválido de acordo com os dados repassados',
      );

    const newData: UpdateBodyCompositionDto = {
      date,
      weight,
      waist,
      hip,
      waistEstature,
      waistHip,
      imc,
      scapula,
      triceps,
      biceps,
      suprailiac,
      sumPleats,
      density,
      bodyFat,
      mg,
      mcm,
      minimumWeight,
      maximumWeight,
      cardiovascularRisk,
    };

    return await this.bodyCompositionFactory.update(
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
  ): Promise<GetAllBodyCompositionDto> {
    const evaluations = await this.bodyCompositionFactory.getAll(
      orderBy,
      paginationParams,
      studentID,
    );

    const returnedData: GetAllBodyCompositionDto = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }

  async getByID(id: string): Promise<GetBodyCompositionDto> {
    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    return this.bodyCompositionFactory.getOne(evaluation);
  }
}
