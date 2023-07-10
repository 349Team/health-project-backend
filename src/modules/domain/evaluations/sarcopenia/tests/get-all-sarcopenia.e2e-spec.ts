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

describe('Buscar avaliações Sarcopenia', () => {
  it(`/:studentId (GET) deve receber um array vazio como resultado`, async () => {
    return await server
      .get(
        `/evaluation?studentId=${studentId}&page=1&limit=50&orderBy=updatedAt`,
      )
      .set('Authorization', `Bearer ${token}`)
      .expect((result) => {
        expect(result.body.data).toStrictEqual([]);
      })
      .expect(200);
  });

  it(`/:studentId (GET) deve receber um array com avaliações como resultado`, async () => {
    for (let i = 0; i < 5; i++) {
      await server
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

  it('/:studentId Deve falhar devido a página inválida informada.', async () => {
    const page = 0;
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
