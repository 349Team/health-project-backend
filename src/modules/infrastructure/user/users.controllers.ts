import {
  Body,
  Controller,
  Delete,
  Param,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { Role, User } from '../user/entities/user.entity';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { UsersService } from './user.service';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../auth/roles.guard';
import { HasRole } from 'src/common/decorators/has-role.decoratos';
import { AuthUserDTO } from './dto/auth-user.dto';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private userService: UsersService) {}

  @HasRole(Role.ADMIN, Role.TRAINER)
  @Get('getMe/:id')
  async findOne(@AuthUser() user: AuthUserDTO): Promise<AuthUserDTO> {
    return user;
  }

  @HasRole(Role.ADMIN, Role.TRAINER)
  @Patch('editMe/:id')
  updateUser(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'EDIT' })) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(updateUserDto, user.id);
  }

  @HasRole(Role.ADMIN)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
