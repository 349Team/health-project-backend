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

describe('Buscar avaliações de Bateria Funcional', () => {
    it(`/:studentId (GET) deve receber um array vazio como resultado`, async () => {
      return await server
        .get(
          `/evaluation?studentId=${studentId}&page=1&limit=50&orderBy=updatedAt`,
        )
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body.data).toStrictEqual([]);
        })
        .expect(200);
    });
  
    it(`/:studentId (GET) deve receber um array não vazio como resultado`, async () => {
      for (let i = 0; i < 5; i++) {
        await server
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
                  sitAndReachYourFeetClassification:'ÓTIMO',
                  tugResult:3.3,
                  tugPercent: 85,
                  tugClassification: 'ÓTIMO',
                  reachTheBackResult: 9.5,
                  reachTheBackPercent: 10,
                  reachTheBackClassification: 'RUIM'
              }
            })
            .set('Authorization', `Bearer ${token}`);
      }
  
      return await server
        .get(
          `/evaluation?studentId=${studentId}&page=1&limit=50&orderBy=updatedAt`,
        )
        .set('Authorization', `Bearer ${token}`)
        .expect((res) => {
          expect(res.body.meta.totalItems).toBe(5);
        })
        .expect(200);
    });
  
    it(`/:studentId (GET) deve falhar devido a página invalida`, async () => {
      const page = -1;
      const limit = 5;
      const orderBy = 'updatedAt';
  
      return await server
        .get(
          `/evaluation?studentId=${studentId}&page=${page}&limit=${limit}&orderBy=${orderBy}`,
        )
        .set('Authorization', `Bearer ${token}`)
        .expect(400);
    });
  });