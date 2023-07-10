import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateUserDto {
  @ApiProperty()
  @JoiSchema(['EDIT'], Joi.string().optional())
  name: string;

  @ApiProperty()
  @JoiSchema(['EDIT'], Joi.string().email().optional())
  email: string;

  @ApiProperty()
  @JoiSchema(['EDIT'], Joi.string().min(8).optional())
  password: string;
}
