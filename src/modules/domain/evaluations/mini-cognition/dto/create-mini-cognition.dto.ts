import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateMiniCognitionDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  scholarity: number;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_4: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_5: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_4: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_5: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_4: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_5: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_4: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_5: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked7_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked7_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked8_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_2: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_3: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked10_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked11_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked12_1: boolean;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  result: string;
}
