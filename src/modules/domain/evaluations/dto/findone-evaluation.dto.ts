import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class FindOneEvaluationDto {
  @JoiSchema(['FIND'], Joi.string().required())
  type: string;

  @JoiSchema(['FIND'], Joi.string().required())
  id: string;
}
