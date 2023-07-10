import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetMiniCognitionDto } from './get-mini-cognition.dto';

export class GetAllMiniCognitionDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetMiniCognitionDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
