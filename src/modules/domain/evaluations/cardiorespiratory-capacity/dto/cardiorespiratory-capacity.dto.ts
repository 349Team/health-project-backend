import Joi from 'joi';

export const CardioRespiratoryCapacitySchema = Joi.object({
  date: Joi.date().required(),
  weight: Joi.number().required(),
  time: Joi.number().required(),
  finalFC: Joi.number().required(),
  vo2Lmin: Joi.number().required(),
  vo2MlKG: Joi.number().required(),
  result: Joi.string().required(),
}).options({
  abortEarly: false,
});
