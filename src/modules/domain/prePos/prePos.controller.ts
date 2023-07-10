import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { PrePosService } from './prePos.service';
import { CreatePrePosDto } from './dto/createPrePos.dto';
import { UpdatePrePosDto } from './dto/updatePrePos.dto';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { JoiPipe } from 'nestjs-joi';
import { PrePos } from './entities/prePos.entity';
import { Pagination } from 'src/common/decorators/pagination.decorator';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';

@Controller('prepos')
@UseGuards(JwtAuthGuard)
export class PrePosController {
  constructor(private readonly prePosService: PrePosService) {}

  @Post('create')
  async create(
    @AuthUser() user: User,
    @Body(new JoiPipe({ group: 'CREATE' }))
    createPrePosDto: CreatePrePosDto,
  ): Promise<PrePos> {
    if (!user) throw new ForbiddenException('User not logged in');

    return await this.prePosService.create(createPrePosDto, user);
  }

  @Get('list')
  async findAll(
    @AuthUser() user: User,
    @Pagination() paginationParams: PaginationParams,
  ): Promise<PaginationResponseDto<PrePos>> {
    return new PaginationResponseDto<PrePos>(
      await this.prePosService.findAll(paginationParams, user),
    );
  }

  @Get('student/:studentId')
  async findBystudent(
    @AuthUser() user: User,
    @Param('studentId') studentId: string,
    @Pagination() paginationParams: PaginationParams,
  ): Promise<PaginationResponseDto<PrePos>> {
    return new PaginationResponseDto<PrePos>(
      await this.prePosService.findBystudent(paginationParams, studentId, user),
    );
  }

  @Get('get/:id')
  async findOne(
    @AuthUser() user: User,
    @Param('id') id: string,
  ): Promise<PrePos> {
    return await this.prePosService.findOne(id, user);
  }

  @Patch('update/:id')
  async update(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    updatePrePosDto: UpdatePrePosDto,
  ): Promise<PrePos> {
    return await this.prePosService.update(id, updatePrePosDto, user);
  }

  @Delete('delete/:id')
  async remove(
    @AuthUser() user: User,
    @Param('id') id: string,
  ): Promise<PrePos> {
    return await this.prePosService.remove(id, user);
  }
}
