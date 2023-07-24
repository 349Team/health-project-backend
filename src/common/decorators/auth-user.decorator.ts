import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AuthUserDTO,
  AuthUserDTOSchema,
} from 'src/modules/infrastructure/user/dto/auth-user.dto';

export function AuthUser() {
  const jwtService: JwtService = new JwtService();

  return createParamDecorator(
    async (_data: unknown, context: ExecutionContext) => {
      const request = context.switchToHttp().getRequest();

      const validated = AuthUserDTOSchema.validate(request.user, {
        stripUnknown: true,
      });

      if (validated.error) {
        const errorMessages = validated.error.details
          .map((d) => d.message)
          .join();

        throw new InternalServerErrorException(
          'Schema validate error on AuthUser param decorator: ' + errorMessages,
        );
      }

      return validated.value as AuthUserDTO;
    },
  )();
}
