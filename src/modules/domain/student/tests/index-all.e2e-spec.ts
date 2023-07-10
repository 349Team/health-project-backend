import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { StudentModule } from 'src/modules/domain/student/student.module';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let token: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [UserModule, DatabaseTestModule, AuthModule, StudentModule],
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

  await server
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
      birthDate: '2000-01-01T01:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  await server
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
      birthDate: '2000-01-01T01:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);
});

describe('Buscar todos os alunos de um professor logado', () => {
  const tokenFalse =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJjMjYzYWNhLTgyOTctNDA2ZS1iNTk2LTAzNmY0NzY0YTVhZSIsImVtYWlsIjoiYXNkQGdtYWlsLmNvbSIsImlhdCI6MTY2ODYxMTA1MCwiZXhwIjoxNjY5MjE1ODUwfQ.rE8K0lHuoPMvbhKOAkqye7O8PtIIRct3c3rESohCxvj';
  it(`/index (GET) deve retornar erro em caso do ID do professor ser inválido `, async () => {
    return await server
      .get(`/student/index`)
      .set('Authorization', `Bearer ${tokenFalse}`)
      .expect(403);
  });

  it(`/:id (GET) deve retornar sucesso caso o professor esteja logado e válido`, async () => {
    return await server
      .get(`/student/index`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
