import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetFunctionalBatteryDto } from './get-functional-battery.dto';

export class GetAllFunctionalBatteryDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetFunctionalBatteryDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}