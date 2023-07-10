import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetAvdDto } from './get-avd.dto';

export class GetAllAvdDto{
    @ApiProperty()
    @JoiSchema(Joi.array().required())
    evaluations: GetAvdDto[];

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    count: number;
}