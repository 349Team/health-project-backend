import * as Joi from 'joi';
import { Role } from '../entities/user.entity';

export const AuthUserDTOSchema = Joi.object().keys({
  id: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.string()
    .valid(...Object.values(Role))
    .required(),
});

export type AuthUserDTO = {
  id: string;
  name: string;
  email: string;
  role: Role;
};
