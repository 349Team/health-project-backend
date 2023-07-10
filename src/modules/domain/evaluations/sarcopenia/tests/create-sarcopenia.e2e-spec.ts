import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { StudentModule } from 'src/modules/domain/student/student.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import request from 'supertest';
import { EvaluationModule } from '../../evaluation.module';

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

describe('Criar avaliações do tipo Sarcopenia', () => {
  it(`/:studentId (CREATE) Falha na validação do resultado`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'sarcopenia',
        data: {
          date: '2022-11-10T03:00:00.000Z',
          weight: 89,
          measuredMuscleMass: 75,
          estimatedMuscleMass: 33.376000000000005,
          walkingSpeed: 2.5,
          handGripStrength: 90,
          muscleMassIndex: 20.35,
          calfCircumference: 30,
          hasSarcopenia: true,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:studentId (CREATE) Sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'sarcopenia',
        data: {
          date: '2022-11-10T03:00:00.000Z',
          weight: 90,
          measuredMuscleMass: 75,
          estimatedMuscleMass: 33.376000000000005,
          walkingSpeed: 2.5,
          handGripStrength: 90,
          muscleMassIndex: 20.35,
          calfCircumference: 30,
          hasSarcopenia: false,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});
