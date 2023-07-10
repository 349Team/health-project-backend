import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateFunctionalBatteryDto {
    @ApiProperty()
    @JoiSchema(Joi.date().required())
    date: Date;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitAndDownResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitAndDownPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    sitAndDownClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    elbowFlexionResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    elbowFlexionPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    elbowFlexionClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    marchWouldParkResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    marchWouldParkPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    marchWouldParkClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitAndReachYourFeetResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    sitAndReachYourFeetPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    sitAndReachYourFeetClassification: string;
    
    @ApiProperty()
    @JoiSchema(Joi.number().required())
    reachTheBackResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    reachTheBackPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    reachTheBackClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    tugResult: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    tugPercent: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    tugClassification: string;

    @ApiProperty()
    @JoiSchema(Joi.string().optional())
    result: string;

}
