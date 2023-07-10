import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateAvdDto {
    @ApiProperty()
    @JoiSchema(Joi.date().greater(-1).less(4).required())
    date: Date;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    bath: number;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    dress: number;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    bathroom: number;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    transfer: number;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    salute: number;

    @ApiProperty()
    @JoiSchema(Joi.number().greater(-1).less(4).required())
    feeding: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    result: string;
}
