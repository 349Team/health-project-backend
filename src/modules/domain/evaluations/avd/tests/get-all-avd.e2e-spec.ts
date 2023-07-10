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

describe('Buscar avaliações de AVD', () => {
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
              "type": "AVD",
              "data": {
                "date" : "2022-11-08T04:00:00.000Z",
                "bath" : 0,
                "dress" : 0,
                "bathroom" : 0,
                "transfer" : 0,
                "salute" : 0,
                "feeding" : 0,
                "result" : 6
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
  