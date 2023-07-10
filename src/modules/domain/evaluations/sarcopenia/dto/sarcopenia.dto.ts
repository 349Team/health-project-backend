import Joi from 'joi';

export const SarcopeniaSchema = Joi.object({
  date: Joi.date().required(),
  weight: Joi.number().required().strict(),
  measuredMuscleMass: Joi.number().strict(),
  estimatedMuscleMass: Joi.number().required().strict(),
  walkingSpeed: Joi.number().required().strict(),
  handGripStrength: Joi.number().required().strict(),
  muscleMassIndex: Joi.number().required().strict(),
  calfCircumference: Joi.number().required().strict(),
  result: Joi.string().required(),
  hasSarcopenia: Joi.boolean().required(),
}).options({ abortEarly: false });
