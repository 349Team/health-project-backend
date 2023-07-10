import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateSarcopeniaDTO {
  @ApiProperty()
  @JoiSchema(Joi.string().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  weight: number;

  @ApiProperty()
  @JoiSchema(Joi.number())
  measuredMuscleMass?: number;

  @ApiProperty()
  @JoiSchema(Joi.number())
  estimatedMuscleMass?: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  walkingSpeed: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  handGripStrength: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  muscleMassIndex: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  calfCircumference: number;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  result: string;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  hasSarcopenia: boolean;
}
