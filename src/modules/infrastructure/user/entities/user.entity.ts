import { BaseEntity } from 'src/common/entities/base.entity';
import { generateHash } from 'src/common/utils/hash.util';
import { PrePos } from 'src/modules/domain/prePos/entities/prePos.entity';
import { Student } from 'src/modules/domain/student/entities/student.entity';
import { Evaluation } from 'src/modules/domain/evaluations/entities/evaluation.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Student, (student) => student.user)
  students: Student[];

  @OneToMany(() => Evaluation, (evaluation) => evaluation.createdBy)
  evaluations: Evaluation[];

  @OneToMany(() => PrePos, (prePos) => prePos.createdBy)
  prepos: PrePos[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = generateHash(this.password);
  }
}
