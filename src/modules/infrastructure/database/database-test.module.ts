import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/modules/domain/evaluations/entities/evaluation.entity';
import { Field } from 'src/modules/domain/evaluations/entities/field.entity';
import { TestBatteries } from 'src/modules/domain/evaluations/entities/test-batteries.entity';
import { Student } from 'src/modules/domain/student/entities/student.entity';
import { PrePos } from 'src/modules/domain/prePos/entities/prePos.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      logging: false,
      entities: [User, Evaluation, Field, TestBatteries, Student, PrePos],
      synchronize: true,
    }),
  ],
})
export class DatabaseTestModule {}
