import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateCardiorespiratoryCapacityDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  weight: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  time: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  finalFC: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  vo2Lmin: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  vo2MlKG: number;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  result: string;
}
