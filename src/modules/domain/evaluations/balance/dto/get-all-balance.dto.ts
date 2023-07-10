import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetBalanceDto } from './get-balance.dto';

export class GetAllBalanceDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetBalanceDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
