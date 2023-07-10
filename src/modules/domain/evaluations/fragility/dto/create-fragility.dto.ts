import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateFragilityDTO {
  @ApiProperty()
  @JoiSchema(Joi.string().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  looseWeight: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  activityDifficultLastWeekFrequency: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  KeepGoingDifficultLastWeekFrequency: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  walkingDays: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  walkingMinutesPerDay: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  moderateActivityDays: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  moderateActivityMinutesPerDay: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  vigorousActivityDays: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  vigorousActivityMinutesPerDay: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  weight: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  time: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  handgripStrength: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  imc: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  mets1: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  mets2: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  mets3: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  metsTotal: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  kcal: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  score: number;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  result: string;
}
