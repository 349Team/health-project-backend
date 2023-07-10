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
import { CreateFragilityDTO } from './dto/create-fragility.dto';
import { FragilitySchema } from './dto/fragility.dto';
import { GetAllFragilityDTO } from './dto/get-all-fragility.dto';
import { GetFragilityDTO } from './dto/get-fragility.dto';
import { UpdateFragilityDTO } from './dto/update-fragility.dto';
import { FragilityFactory } from './fragility.factory';
import calculateActivityDifficultLastWeekFrequency from './helpers/activity-difficult-last-week-frequency';
import calculateIPAO from './helpers/calculate-ipao';
import calculateLooseWeight from './helpers/calculate-loose-weight';
import calculateWalkingTest from './helpers/calculate-walking-test';
import calculateHandgripStrength from './helpers/calculateHandgripStrength';
import { IFragility } from './interfaces/fragility.interface';

@Injectable()
export class FragilityStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(private readonly fragilityFactory: FragilityFactory) {}

  private recalculateResult(input: Partial<IFragility>) {
    const {
      sex,
      looseWeight,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
      time,
      stature,
      handgripStrength,
      imc,
    } = input;

    const calculatedLooseWeight = calculateLooseWeight({ looseWeight });
    const calculatedActivityDifficultLastWeekFrequency =
      calculateActivityDifficultLastWeekFrequency({
        activityDifficultLastWeekFrequency,
        KeepGoingDifficultLastWeekFrequency,
      });
    const calculatedHandgripStrength = calculateHandgripStrength({
      handgripStrength,
      imc,
      sex,
    });
    const calculatedWalkingTest = calculateWalkingTest({ time, stature, sex });

    const { mets1, mets2, mets3, metsTotal, kcal } = calculateIPAO({
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
    });

    const score =
      calculatedLooseWeight +
      calculatedActivityDifficultLastWeekFrequency +
      calculatedHandgripStrength +
      calculatedWalkingTest;

    let result = 'não-frágil';
    if (score <= 2 && score > 0) result = 'pré-frágil';
    else if (score > 2) result = 'frágil';

    return { result, score, mets1, mets2, mets3, metsTotal, kcal };
  }

  private validateResult(input: Partial<IFragility>): boolean {
    const {
      score: originalScore,
      result: originalResult,
      mets1: originalMets1,
      mets2: originalMets2,
      mets3: originalMets3,
      metsTotal: originalMetsTotal,
      kcal: originalKcal,
    } = input;

    const { result, score, mets1, mets2, mets3, metsTotal, kcal } =
      this.recalculateResult(input);

    if (result !== originalResult) {
      return false;
    }
    if (score !== originalScore) {
      return false;
    }
    if (mets1 !== originalMets1) {
      return false;
    }
    if (mets2 !== originalMets2) {
      return false;
    }
    if (mets3 !== originalMets3) {
      return false;
    }
    if (metsTotal !== originalMetsTotal) {
      return false;
    }
    if (kcal !== originalKcal) {
      return false;
    }

    return true;
  }

  async create(
    input: CreateFragilityDTO,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetFragilityDTO> {
    const { sex: studentSex, stature } = student;
    const sex = studentSex === 'M' ? 'Masculino' : 'Feminino';

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
      weight,
      time,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      score,
      result,
    } = input;

    const validation = FragilitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const isResultValid = this.validateResult({
      sex,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
      looseWeight,
      time,
      stature,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      score,
      kcal,
      result,
    });

    if (!isResultValid) {
      throw new BadRequestException(
        'Resultado da avaliação inválido de acordo com os dados repassados!',
      );
    }

    const data: CreateFragilityDTO = {
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
      weight,
      time,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      score,
      result,
    };

    return await this.fragilityFactory.create(data, user, type, student);
  }

  async update(
    id: string,
    type: string,
    input: UpdateFragilityDTO,
  ): Promise<GetFragilityDTO> {
    const validation = FragilitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields', 'student'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com o id ${id} não encontrada.`);
    }

    const { sex: studentSex, stature } = evaluation.student;

    const sex = studentSex === 'H' ? 'Masculino' : 'Feminino';

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
      weight,
      time,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      score,
      result,
    } = input;

    const isResultValid = this.validateResult({
      sex,
      looseWeight,
      activityDifficultLastWeekFrequency,
      KeepGoingDifficultLastWeekFrequency,
      walkingDays,
      walkingMinutesPerDay,
      moderateActivityDays,
      moderateActivityMinutesPerDay,
      vigorousActivityDays,
      vigorousActivityMinutesPerDay,
      weight,
      time,
      stature,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      score,
      kcal,
      result,
    });

    if (!isResultValid)
      throw new BadRequestException(
        'Resultado da avaliação inválido de acordo com os dados repassados!',
      );

    const newData: UpdateFragilityDTO = {
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
      weight,
      time,
      handgripStrength,
      imc,
      mets1,
      mets2,
      mets3,
      metsTotal,
      kcal,
      score,
      result,
    };

    return await this.fragilityFactory.update(id, type, newData, evaluation);
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetAllFragilityDTO> {
    const evaluations = await this.fragilityFactory.getAll(
      orderBy,
      paginationParams,
      studentID,
    );

    const returnedData: GetAllFragilityDTO = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }

  async getByID(id: string): Promise<GetFragilityDTO> {
    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    return this.fragilityFactory.getOne(evaluation);
  }
}
