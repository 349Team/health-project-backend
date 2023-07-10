import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetCardiorespiratoryCapacityDto } from './get-cardiorespiratory-capacity.dto';

export class GetAllCardiorespiratoryCapacityDto {
  @ApiProperty()
  @JoiSchema(Joi.array().required())
  evaluations: GetCardiorespiratoryCapacityDto[];

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  count: number;
}
