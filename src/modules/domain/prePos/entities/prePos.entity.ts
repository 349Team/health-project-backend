import { Exclude } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class PrePos extends BaseEntity {
  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  horarioPos: Date;

  @Column({ nullable: true })
  horarioPre: Date;

  @Column({ nullable: true })
  pasPre: number;

  @Column({ nullable: true })
  pasPos: number;

  @Column({ nullable: true })
  padPre: number;

  @Column({ nullable: true })
  padPos: number;

  @Column({ nullable: true })
  glicemiaPre: number;

  @Column({ nullable: true })
  glicemiaPos: number;

  @Column({ nullable: true })
  horarioTreino: number;

  @Column({ nullable: true })
  pseEPre: number;

  @Column({ nullable: true })
  pseEPos: number;

  @Column({ nullable: true })
  observacao: string;

  @ManyToOne(() => User, (createdBy) => createdBy.prepos)
  @Exclude()
  @JoinColumn()
  createdBy: User;

  @ManyToOne(() => Student, (student) => student.prepos)
  @Exclude()
  @JoinColumn()
  student: Student;
}
