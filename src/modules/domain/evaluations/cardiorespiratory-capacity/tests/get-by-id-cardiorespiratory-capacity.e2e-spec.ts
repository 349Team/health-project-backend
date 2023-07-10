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

describe('Buscar avaliação Cardiorespiratória', () => {
  it(`/:id?type=ACR (GET) deve receber erro ao buscar id inválido`, async () => {
    id = 'aca8e3cd-2c41-4b7e-9e1f-f3d8206064a';

    return await server
      .get(`/evaluation/${id}?type=ACR`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:id?type=ACR (GET) deve receber erro ao buscar id válido porém inexistente`, async () => {
    id = 'a9cd5ca1-6bba-46a9-ad3e-f7f4bde8eb8f';

    const teste = await server
      .get(`/evaluation/${id}?type=ACR`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);

    return teste;
  });

  it(`/:id?type=ACR (GET) deve retornar sucesso ao buscar id válido`, async () => {
    const response = await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'ACR',
        data: {
          weight: 75,
          time: 10,
          date: '2022-10-12T03:00:00.000Z',
          finalFC: 150,
          vo2Lmin: 3.733740000000001,
          vo2MlKG: 46.67175000000002,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`);

    id = response.body.id;

    return await server
      .get(`/evaluation/${id}?type=ACR`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
