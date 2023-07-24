import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { Role, User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import * as fs from 'fs';
import { JwtAuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { HasRole } from 'src/common/decorators/has-role.decoratos';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @UseGuards(JwtAuthGuard, RolesGuard)
  @HasRole(Role.ADMIN)
  @Post('register')
  async register(
    @Body(new JoiPipe({ group: 'REGISTER' })) userDto: UserDto,
  ): Promise<User | never> {
    return this.service.register(userDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body(new JoiPipe({ group: 'LOGIN' })) userDto: UserDto,
  ): Promise<string | never> {
    return this.service.login(userDto);
  }

  @Get('ping')
  @HttpCode(HttpStatus.OK)
  async ping(): Promise<any> {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
    const { version, name, description } = packageJson;
    return { name, version, description };
  }
}
