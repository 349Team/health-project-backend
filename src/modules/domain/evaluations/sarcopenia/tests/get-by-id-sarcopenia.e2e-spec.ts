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
let id: string;
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
      email: 'test@sarcopenia.com',
      name: 'teste',
      password: '123456789',
    })
    .expect(201);

  const login = await server
    .post('/auth/login')
    .send({ email: 'test@sarcopenia.com', password: '123456789' })
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

describe('Buscar avaliação do tipo Sarcopenia pelo ID', () => {
  it(`/:id?type=sarcopenia (GET) deve receber erro ao buscar id inválido`, async () => {
    id = '14dd648f-66ca-4ba6-bc67-d6620f80c6g5';

    return await server
      .get(`/evaluation/${id}?type=sarcopenia`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:id?type=sarcopenia (GET) deve receber erro ao buscar id válido porém inexistente`, async () => {
    id = 'a9cd5ca1-6bba-46a9-ad3e-f7f4bde8eb8f';

    const test = await server
      .get(`/evaluation/${id}?type=sarcopenia`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);

    return test;
  });

  it(`/:id?type=sarcopenia (GET) deve retornar sucesso ao buscar id válido`, async () => {
    const response = await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'sarcopenia',
        data: {
          date: '2022-11-10T03:00:00.000Z',
          weight: 90,
          measuredMuscleMass: 75.3,
          estimatedMuscleMass: 33.376000000000005,
          walkingSpeed: 2.5,
          handGripStrength: 90,
          muscleMassIndex: 20.35,
          calfCircumference: 30,
          hasSarcopenia: false,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`);

    id = response.body.id;

    return await server
      .get(`/evaluation/${id}?type=sarcopenia`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
