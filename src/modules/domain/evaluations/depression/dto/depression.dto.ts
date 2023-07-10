import Joi from 'joi';

export const DepressionSchema = Joi.object({
  date: Joi.date().required(),
  campo1: Joi.boolean().required(),
  campo2: Joi.boolean().required(),
  campo3: Joi.boolean().required(),
  campo4: Joi.boolean().required(),
  campo5: Joi.boolean().required(),
  campo6: Joi.boolean().required(),
  campo7: Joi.boolean().required(),
  campo8: Joi.boolean().required(),
  campo9: Joi.boolean().required(),
  campo10: Joi.boolean().required(),
  campo11: Joi.boolean().required(),
  campo12: Joi.boolean().required(),
  campo13: Joi.boolean().required(),
  campo14: Joi.boolean().required(),
  campo15: Joi.boolean().required(),
  result: Joi.number().required(),
}).options({
  abortEarly: false,
});
