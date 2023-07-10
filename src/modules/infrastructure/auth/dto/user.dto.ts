import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions({
  allowUnknown: false,
})
export class UserDto {
  @ApiProperty()
  @JoiSchema(['REGISTER'], Joi.string().required())
  name: string;

  @ApiProperty()
  @JoiSchema(['REGISTER', 'LOGIN'], Joi.string().email().required())
  email: string;

  @ApiProperty()
  @JoiSchema(['REGISTER', 'LOGIN'], Joi.string().min(8).required())
  password: string;
}
