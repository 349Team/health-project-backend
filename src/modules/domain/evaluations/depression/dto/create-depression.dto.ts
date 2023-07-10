import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateDepressionDto {
    @ApiProperty()
    @JoiSchema(Joi.date().required())
    date: Date;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo1: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo2: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo3: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo4: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo5: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo6: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo7: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo8: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo9: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo10: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo11: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo12: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo13: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo14: boolean;

    @ApiProperty()
    @JoiSchema(['CREATE'], Joi.boolean().required())
    campo15: boolean;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    result: string;
}
