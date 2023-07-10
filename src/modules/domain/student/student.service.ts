import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { User } from '../../infrastructure/user/entities/user.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  @InjectRepository(Student)
  private readonly studentRepository: Repository<Student>;

  async create(
    createStudentDto: CreateStudentDto,
    user: User,
  ): Promise<Student> {
    const student = this.studentRepository.create({
      ...createStudentDto,
      user: user,
    });

    return await this.studentRepository.save(student);
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new BadRequestException(`Estudante com id ${id} não encontrado.`);
    }
    return student;
  }

  async delete(
    id: string,
    updateStudentDto: UpdateStudentDto,
    user: User,
  ): Promise<Student> {
    let student = await this.studentRepository.findOne({
      where: { id: id },
    });
    if (!user) throw new ForbiddenException('Usuário não logado');
    student = await this.studentRepository.findOneBy({ id: id });
    updateStudentDto.flag = false;
    student.flag = updateStudentDto.flag;

    return await this.studentRepository.save(student);
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id: id });
    if (!student) {
      throw new BadRequestException(`Id do aluno ${id} inválido.`);
    }

    const {
      name,
      breed,
      stature,
      contact,
      healthPlan,
      sex,
      emergencyContact,
      address,
      birthDate,
      note,
      flag,
    } = updateStudentDto;

    student.name = name ? name : student.name;
    student.breed = breed ? breed : student.breed;
    student.stature = stature ? stature : student.stature;
    student.contact = contact ? contact : student.contact;
    student.sex = sex ? sex : student.sex;
    student.healthPlan = healthPlan ? healthPlan : student.healthPlan;
    student.emergencyContact = emergencyContact
      ? emergencyContact
      : student.emergencyContact;
    student.address = address ? address : student.address;
    student.birthDate = birthDate ? birthDate : student.birthDate;
    student.note = note ? note : student.note;
    student.flag = flag ? flag : student.flag;

    return await this.studentRepository.save(student);
  }

  async findAll(id: string): Promise<Student[]> {
    const student = await this.studentRepository.find({
      relations: {
        user: true,
      },
      where: {
        flag: true,
        user: {
          id: id,
        },
      },
    });
    if (!student) {
      throw new BadRequestException(`Id do professor ${id} inválido.`);
    }
    return student;
  }
}
