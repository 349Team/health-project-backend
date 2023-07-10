import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetBodyCompositionDto } from './get-body-composition.dto';

export class GetAllBodyCompositionDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetBodyCompositionDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
