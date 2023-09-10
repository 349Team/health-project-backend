import {
  Body,
  Controller,
  Delete,
  Param,
  Get,
  Patch,
  UseGuards,
  ForbiddenException,
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
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'EDIT' })) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(updateUserDto, id);
  }

  @HasRole(Role.ADMIN)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }

  @HasRole(Role.ADMIN)
  @Get('trainer')
  async findTrainer(): Promise<User[]> {
    return this.userService.findTrainer();
  }

  @HasRole(Role.ADMIN)
  @Get('index')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @HasRole(Role.ADMIN)
  @Get('show/:id')
  async show(
    @AuthUser() user: User,
    @Param('id') id: string,
  ): Promise<User>{
    if(!user) throw new ForbiddenException('Sessão de usuário inválida');
    if (!id) throw new ForbiddenException('Informe o ID do aluno'); 
    return await this.userService.findOne(id);
  }
  
}
