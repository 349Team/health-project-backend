import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role, User } from '../user/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const user = context.switchToHttp().getRequest().user as User;

    if (!user)
      throw new InternalServerErrorException(
        'Invalid pipeline order of guards: RolesGuard',
      );

    const requiredRolesOnResource = this.reflector.getAllAndOverride<Role[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRolesOnResource || !requiredRolesOnResource.length)
      throw new ForbiddenException('Resource is locked for all permissions');

    const authorized = requiredRolesOnResource.some(
      (role) => role === user.role,
    );

    if (!authorized)
      throw new ForbiddenException(
        'User does not have the necessary permission to access this resource',
      );

    return true;
  }
}
