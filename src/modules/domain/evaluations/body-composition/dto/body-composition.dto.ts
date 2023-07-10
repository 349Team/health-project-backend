import Joi from 'joi';

export const BodyCompositionSchema = Joi.object({
  date: Joi.date().required(),
  weight: Joi.number().required(),
  waist: Joi.number().required(),
  hip: Joi.number().required(),
  waistEstature: Joi.number().required(),
  waistHip: Joi.number().required(),
  imc: Joi.number().required(),
  scapula: Joi.number().required(),
  triceps: Joi.number().required(),
  biceps: Joi.number().required(),
  suprailiac: Joi.number().required(),
  sumPleats: Joi.number().required(),
  density: Joi.number().required(),
  bodyFat: Joi.number().required(),
  mg: Joi.number().required(),
  mcm: Joi.number().required(),
  minimumWeight: Joi.number().required(),
  maximumWeight: Joi.number().required(),
  cardiovascularRisk: Joi.object({
    waistCircumference: Joi.string().required(),
    rcq: Joi.string().required(),
  }).required(),
}).options({
  abortEarly: false,
});
