import * as Joi from 'joi';
import { ApiProperty } from '@nestjs/swagger';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class CreatePrePosDto {
  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.date().optional())
  date: Date;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.date().optional())
  horarioPos: Date;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.date().optional())
  horarioPre: Date;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPre: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPos: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  padPre: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  padPos: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPre: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPos: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.number().optional())
  horarioTreino: number;

  @ApiProperty()
  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPre: number;

  @ApiProperty()
  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPos: number;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.string().optional())
  observacao: string;

  @ApiProperty()
  @JoiSchema(['CREATE'], Joi.string().uuid().optional())
  studentId: string;

  @JoiSchema(['CREATE'], Joi.forbidden())
  createdBy: User;
}
