import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/modules/infrastructure/user/entities/user.entity';

export const HasRole = (...roles: Role[]) => SetMetadata('roles', roles);
