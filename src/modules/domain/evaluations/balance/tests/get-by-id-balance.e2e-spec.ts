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

describe('Buscar avaliação de Equilibrio', () => {
  it(`/:id?type=AEQ (GET) deve receber erro ao buscar id inválido`, async () => {
    id = 'aca8e3cd-2c41-4b7e-9e1f-f3d8206064a';

    return await server
      .get(`/evaluation/${id}?type=AEQ`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:id?type=AEQ (GET) deve receber erro ao buscar id não válido porém inexistente`, async () => {
    id = 'a9cd5ca1-6bba-46a9-ad3e-f7f4bde8eb8f';

    return await server
      .get(`/evaluation/${id}?type=AEQ`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);
  });

  it(`/:id?type=AEQ (GET) deve retornar sucesso ao buscar id válido`, async () => {
    const response = await server
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
      .set('Authorization', `Bearer ${token}`);

    id = response.body.id;

    return await server
      .get(`/evaluation/${id}?type=AEQ`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
