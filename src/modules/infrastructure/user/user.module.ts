import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/modules/domain/evaluations/entities/evaluation.entity';
import { Student } from 'src/modules/domain/student/entities/student.entity';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import { UserController } from './users.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([User, Evaluation, Student])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [TypeOrmModule],
})
export class UserModule {}
