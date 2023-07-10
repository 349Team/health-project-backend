import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Field } from './field.entity';
import { TestBatteries } from './test-batteries.entity';

@Entity()
export class Evaluation extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true})
  result?: string;

  @OneToMany(() => Field, (field) => field.evaluation)
  fields?: Field[];

  @ManyToOne(() => User, (user) => user.evaluations)
  @JoinColumn()
  @Exclude()
  createdBy: User;

  @ManyToOne(() => Student, (student) => student.evaluations)
  @JoinColumn()
  @Exclude()
  student: Student;

  @OneToMany(() => TestBatteries, (testBatteries) => testBatteries.evaluations)
  @JoinTable()
  testBatteries?: TestBatteries[];
}
