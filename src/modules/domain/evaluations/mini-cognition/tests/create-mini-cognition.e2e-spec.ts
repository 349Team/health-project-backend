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
let testdata: object;

beforeAll(async () => {
  testdata = {
    date: '2022-10-12T03:00:00.000Z',
    scholarity: 1,
    checked1_1: true,
    checked1_2: false,
    checked1_3: true,
    checked1_4: false,
    checked1_5: true,
    checked2_1: true,
    checked2_2: false,
    checked2_3: true,
    checked2_4: false,
    checked2_5: true,
    checked3_1: false,
    checked3_2: true,
    checked3_3: false,
    checked4_1: true,
    checked4_2: false,
    checked4_3: true,
    checked4_4: false,
    checked4_5: true,
    checked5_1: false,
    checked5_2: true,
    checked5_3: false,
    checked5_4: true,
    checked5_5: false,
    checked6_1: true,
    checked6_2: false,
    checked6_3: true,
    checked7_1: false,
    checked7_2: true,
    checked8_1: false,
    checked9_1: true,
    checked9_2: false,
    checked9_3: true,
    checked10_1: false,
    checked11_1: true,
    checked12_1: false,
    result: 'Possui um declínio cognitivo.',
  };

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
      name: 'Estudante',
      sex: 'M',
      breed: 'Branco',
      stature: 192,
      healthPlan: 'free',
      emergencyContact: '449994484848',
      contact: '449994484848',
      address: 'Rua 123',
      note:			'teste',
      birthDate: '1980-10-12T03:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('Criar avaliações MiniCognition', () => {
  it(`/:studentId (CREATE) sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'MiniCognition',
        data: testdata,
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});
