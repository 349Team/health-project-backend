import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { CreateSarcopeniaDTO } from './create-sarcopenia.dto';

export class GetSarcopeniaDto extends CreateSarcopeniaDTO {
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
