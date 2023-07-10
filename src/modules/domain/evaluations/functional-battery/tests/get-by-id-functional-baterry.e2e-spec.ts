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

describe('Buscar avaliação de Bateria Funcional', () => {
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
        type: 'functionalBattery',
        data: {
            date: '2022-10-12T03:00:00.000Z',  
            sitAndDownResult: 21,
            sitAndDownPercent: 85,
            sitAndDownClassification:'ÓTIMO',
            elbowFlexionResult: 21,
            elbowFlexionPercent: 65,
            elbowFlexionClassification: 'BOM',
            marchWouldParkResult: 98,
            marchWouldParkPercent: 45,
            marchWouldParkClassification: 'REGULAR',
            sitAndReachYourFeetResult: 6.7,
            sitAndReachYourFeetPercent: 90,
            sitAndReachYourFeetClassification: 'ÓTIMO',
            reachTheBackResult: 9.5,
            reachTheBackPercent: 10,
            reachTheBackClassification: 'RUIM',
            tugResult:3.3,
            tugPercent: 85,
            tugClassification: 'ÓTIMO'
        }
      })
      .set('Authorization', `Bearer ${token}`);

    id = response.body.id;

    return await server
      .get(`/evaluation/${id}?type=functionalBattery`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});