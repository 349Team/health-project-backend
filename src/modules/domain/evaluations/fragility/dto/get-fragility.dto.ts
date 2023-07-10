import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { CreateFragilityDTO } from './create-fragility.dto';

export class GetFragilityDTO extends CreateFragilityDTO {
  @ApiProperty()
  @JoiSchema(Joi.string().required())
  id: string;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  name: string;

  @ApiProperty()
  @JoiSchema(Joi.date().required())
  createdAt: Date;

  @ApiProperty()
  @JoiSchema(Joi.date().required())
  updatedAt: Date;

  @ApiProperty()
  @JoiSchema(Joi.date().required())
  deletedAt: Date;
}
