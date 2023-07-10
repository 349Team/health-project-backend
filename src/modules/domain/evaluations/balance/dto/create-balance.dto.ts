import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateBalanceDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo1: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo2: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo3: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo4: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo5: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo6: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo7: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo8: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo9: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo10: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo11: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo12: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo13: number;

  @ApiProperty()
  @JoiSchema(Joi.number().greater(-1).less(5).required())
  campo14: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  result: string;
}
