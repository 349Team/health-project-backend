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
      name: 'Estudante Testte',
      sex: 'M',
      breed: 'Branco',
      stature: 192.5,
      healthPlan: 'free',
      emergencyContact: '449994484848',
      contact: '449994484848',
      address: 'Rua 123',
      birthDate: '1980-10-12T03:00:00.000Z',
      weight: 97.6,
      note: 'sdfasd',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('Criar avaliações Composição Corporal', () => {
  it(`/:studentId (CREATE) falha na validação do resultado`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'bodyComposition',
        data: {
          date: '2022-11-09T03:00:00.000Z',
          weight: 92,
          waist: 20,
          hip: 20,
          waistEstature: 0.1038961038961039,
          waistHip: 1,
          imc: 24.82712093101703,
          scapula: 10,
          triceps: 20,
          biceps: 20,
          suprailiac: 50,
          sumPleats: 100,
          density: 1.0133,
          bodyFat: 38.502911279976274,
          mg: 35.42267837757817,
          mcm: 56.57732162242183,
          minimumWeight: 78.57961336447539,
          maximumWeight: 83.20194382863127,
          cardiovascularRisk: {
            waistCircumference: 'none',
            rcq: 'none',
          },
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:studentId (CREATE) sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'bodyComposition',
        data: {
          date: '2022-11-09T03:00:00.000Z',
          weight: 92,
          waist: 20,
          hip: 20,
          waistEstature: 0.1038961038961039,
          waistHip: 1,
          imc: 24.82712093101703,
          scapula: 10,
          triceps: 20,
          biceps: 20,
          suprailiac: 50,
          sumPleats: 100,
          density: 1.0133,
          bodyFat: 38.502911279976274,
          mg: 35.42267837757817,
          mcm: 56.57732162242183,
          minimumWeight: 78.57961336447539,
          maximumWeight: 83.20194382863127,
          cardiovascularRisk: {
            waistCircumference: 'none',
            rcq: 'Risco aumentado',
          },
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});
