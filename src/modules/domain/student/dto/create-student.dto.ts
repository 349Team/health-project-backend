import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class CreateStudentDto {
  @JoiSchema(['CREATE'], Joi.string().required())
  name: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  sex: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  breed: string;

  @JoiSchema(['CREATE'], Joi.number().required())
  stature: number;

  @JoiSchema(['CREATE'], Joi.string().required())
  contact: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  healthPlan: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  emergencyContact: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  address: string;

  @JoiSchema(['CREATE'], Joi.date().required())
  birthDate: Date;

  @JoiSchema(['CREATE'], Joi.string().required())
  note: string;

  @JoiSchema(['CREATE'], Joi.boolean().required())
  flag: boolean;

  @JoiSchema(['CREATE'], Joi.forbidden())
  user: User;
}
