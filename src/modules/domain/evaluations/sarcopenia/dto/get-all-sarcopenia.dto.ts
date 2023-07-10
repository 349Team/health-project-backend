import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetSarcopeniaDto } from './get-sarcopenia.dto';

export class GetAllSarcponiaDTO {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetSarcopeniaDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
