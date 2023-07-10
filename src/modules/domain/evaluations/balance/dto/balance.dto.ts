import Joi from 'joi';

export const BalanceSchema = Joi.object({
  date: Joi.date().required(),
  campo1: Joi.number().required(),
  campo2: Joi.number().required(),
  campo3: Joi.number().required(),
  campo4: Joi.number().required(),
  campo5: Joi.number().required(),
  campo6: Joi.number().required(),
  campo7: Joi.number().required(),
  campo8: Joi.number().required(),
  campo9: Joi.number().required(),
  campo10: Joi.number().required(),
  campo11: Joi.number().required(),
  campo12: Joi.number().required(),
  campo13: Joi.number().required(),
  campo14: Joi.number().required(),
  result: Joi.number().required(),
}).options({
  abortEarly: false,
});
