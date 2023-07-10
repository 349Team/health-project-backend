import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetDepressionDto } from './get-depression.dto';

export class GetAllDepressionDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetDepressionDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
