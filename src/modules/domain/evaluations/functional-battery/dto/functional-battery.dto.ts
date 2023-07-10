import Joi from 'joi';

export const functionalBatterySchema = Joi.object({
    date: Joi.date().required(),
    sitAndDownResult: Joi.number().required(),
    sitAndDownPercent: Joi.number().required(),
    sitAndDownClassification: Joi.string().required(),
    elbowFlexionResult: Joi.number().required(),
    elbowFlexionPercent: Joi.number().required(),
    elbowFlexionClassification: Joi.string().required(),
    marchWouldParkResult: Joi.number().required(),
    marchWouldParkPercent: Joi.number().required(),
    marchWouldParkClassification: Joi.string().required(),
    sitAndReachYourFeetResult: Joi.number().required(),
    sitAndReachYourFeetPercent: Joi.number().required(),
    sitAndReachYourFeetClassification: Joi.string().required(),
    reachTheBackResult: Joi.number().required(),
    reachTheBackPercent:Joi.number().required(),
    reachTheBackClassification: Joi.string().required(),
    tugResult: Joi.number().required(),
    tugPercent: Joi.number().required(),
    tugClassification: Joi.string().required(),
    result: Joi.string().optional(),

}). options({
    abortEarly: false,
})