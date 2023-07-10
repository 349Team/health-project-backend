import Joi from "joi";

export const AvdSchema = Joi.object({
    date: Joi.date().required(),
    bath: Joi.number().required(),
    dress: Joi.number().required(),
    bathroom: Joi.number().required(),
    transfer: Joi.number().required(),
    salute: Joi.number().required(),
    feeding: Joi.number().required(),
    result: Joi.number().required()
}).options({ abortEarly: false });