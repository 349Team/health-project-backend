import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { CreateMiniCognitionDto } from './create-mini-cognition.dto';

export class GetMiniCognitionDto extends CreateMiniCognitionDto {
  @ApiProperty()
  @JoiSchema(Joi.string().guid().required())
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
  @JoiSchema(Joi.date().allow(null))
  deletedAt: Date;
}
