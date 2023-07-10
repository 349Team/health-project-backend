import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetFragilityDTO } from './get-fragility.dto';

export class GetAllFragilityDTO {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetFragilityDTO[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
