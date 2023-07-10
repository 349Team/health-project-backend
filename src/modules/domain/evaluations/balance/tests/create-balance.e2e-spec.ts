import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EvaluationModule } from '../../evaluation.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { StudentModule } from 'src/modules/domain/student/student.module';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let token: string;
let studentId: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      EvaluationModule,
      UserModule,
      DatabaseTestModule,
      AuthModule,
      StudentModule,
    ],
  }).compile();
  app = module.createNestApplication();
  await app.init();

  server = request(app.getHttpServer());

  await server
    .post('/auth/register')
    .send({
      email: 'test@test.com',
      name: 'teste',
      password: '12345678',
    })
    .expect(201);

  const login = await server
    .post('/auth/login')
    .send({
      email: 'test@test.com',
      password: '12345678',
    })
    .expect(200);

  token = login.text;

  const student = await server
    .post('/student/create')
    .send({
      name: 'EstudanteTeste',
      sex: 'M',
      breed: 'Amarelo',
      stature: 179.3,
      healthPlan: 'free',
      emergencyContact: '44999999999',
      contact: '44999999999',
      address: 'Rua do seu Zé',
      note:			'teste',
      birthDate: '2000-01-01T01:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('Criar avaliações de Equilibrio', () => {
  it(`/:studentId (CREATE) sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'AEQ',
        data: {
          date: '2022-11-06T03:00:00.000Z',
          campo1: 4,
          campo2: 4,
          campo3: 3,
          campo4: 1,
          campo5: 0,
          campo6: 1,
          campo7: 2,
          campo8: 4,
          campo9: 3,
          campo10: 2,
          campo11: 1,
          campo12: 4,
          campo13: 2,
          campo14: 1,
          result: 32,
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});
