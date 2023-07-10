import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
import { Repository } from 'typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Student } from '../student/entities/student.entity';
import { CreatePrePosDto } from './dto/createPrePos.dto';
import { UpdatePrePosDto } from './dto/updatePrePos.dto';
import { PrePos } from './entities/prePos.entity';

@Injectable()
export class PrePosService {
  @InjectRepository(PrePos)
  private readonly prePosRepository: Repository<PrePos>;

  async create(createPrePosDto: CreatePrePosDto, user: User): Promise<PrePos> {
    const prePos = this.prePosRepository.create({
      ...createPrePosDto,
      student: { id: createPrePosDto.studentId },
      createdBy: user,
    });

    return await this.prePosRepository.save(prePos);
  }

  async findAll(
    paginationParams: PaginationParams,
    user: User,
  ): Promise<PaginationResult<PrePos>> {
    const prepos = await this.prePosRepository.findAndCount({
      where: { createdBy: { id: user.id } },
      skip: (paginationParams.page - 1) * paginationParams.limit,
      take: paginationParams.limit,
      relations: ['student'],
    });

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +prepos[1],
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(prepos[1] / paginationParams.limit),
    };

    return {
      data: prepos[0],
      meta: meta,
    };
  }

  async findBystudent(
    paginationParams: PaginationParams,
    studenId: string,
    user: User,
  ): Promise<PaginationResult<PrePos>> {
    const prepos = await this.prePosRepository.findAndCount({
      where: { createdBy: { id: user.id }, student: { id: studenId } },
      skip: (paginationParams.page - 1) * paginationParams.limit,
      take: paginationParams.limit,
      relations: ['createdBy', 'student'],
    });

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +prepos[1],
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(prepos[1] / paginationParams.limit),
    };

    return {
      data: prepos[0],
      meta: meta,
    };
  }

  async findOne(id: string, user: User): Promise<PrePos> {
    const prePos = await this.prePosRepository.findOne({
      where: { id: id },
      relations: ['createdBy', 'student'],
    });
    if (!prePos) throw new NotFoundException();
    if (prePos.createdBy.id !== user.id) throw new ForbiddenException();

    return prePos;
  }

  async update(
    id: string,
    updatePrePosDto: UpdatePrePosDto,
    user: User,
  ): Promise<PrePos> {
    let prePos = await this.prePosRepository.findOne({
      where: { id: id },
      relations: ['createdBy'],
    });

    if (prePos.createdBy.id !== user.id) throw new ForbiddenException();
    if (updatePrePosDto.studentId)
      prePos.student = { id: updatePrePosDto.studentId } as Student;
    await this.prePosRepository.update(id, updatePrePosDto);
    prePos = await this.prePosRepository.findOneBy({ id: id });

    return prePos;
  }

  async remove(id: string, user: User): Promise<PrePos> {
    const prePos = await this.prePosRepository.findOne({
      where: { id: id },
      relations: ['createdBy'],
    });
    if (prePos.createdBy.id !== user.id) throw new ForbiddenException();
    await this.prePosRepository.softDelete(id);

    return prePos;
  }
}
