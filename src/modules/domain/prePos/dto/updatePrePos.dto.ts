import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class UpdatePrePosDto {
  @JoiSchema(['UPDATE'], Joi.date().optional())
  date: Date;

  @JoiSchema(['UPDATE'], Joi.date().optional())
  horarioPos: Date;

  @JoiSchema(['UPDATE'], Joi.date().optional())
  horarioPre: Date;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pasPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pasPos: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  padPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  padPos: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  glicemiaPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  glicemiaPos: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  horarioTreino: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPos: number;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  observacao: string;

  @JoiSchema(['UPDATE'], Joi.string().uuid().optional())
  studentId: string;

  @JoiSchema(['UPDATE'], Joi.forbidden())
  createdBy: User;
}
