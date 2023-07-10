import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateBodyCompositionDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  weight: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  waist: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  hip: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  waistEstature: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  waistHip: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  imc: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  scapula: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  triceps: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  biceps: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  suprailiac: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  sumPleats: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  density: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  bodyFat: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  mg: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  mcm: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  minimumWeight: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  maximumWeight: number;

  @ApiProperty()
  @JoiSchema(Joi.object().required())
  cardiovascularRisk: {
    waistCircumference: string;
    rcq: string;
  };
}
