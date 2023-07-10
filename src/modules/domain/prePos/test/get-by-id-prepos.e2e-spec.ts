import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import request from 'supertest';
import { PrePosModule } from '../prePos.module';
import { StudentModule } from 'src/modules/domain/student/student.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { string } from 'joi';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let token: string;
let studentId: string;
let id: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      DatabaseTestModule, 
      AuthModule, 
      StudentModule, 
      PrePosModule,
      UserModule
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
      name: 'Aluno',
      sex: 'M',
      breed: 'Pardo',
      stature: 171.8,
      healthPlan: 'free',
      emergencyContact: '44999499994',
      contact: '44999499994',
      address: 'Rua Lorem Ipsum',
      note:			'teste',
      birthDate: '1960-06-12T03:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('Buscar monitoramento', () => {
  it(`get/:id (GET) deve receber erro ao buscar id não válido porém inexistente`, async () => {
    id = 'a9cd5ca1-6bba-46a9-ad3e-f7f4bde8eb8f';

    return await server
      .get(`/prepos/get/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);
  });

  it(`get/:id (GET) deve retornar sucesso ao buscar id válido`, async () => {
    const response = await server
    .post('/prepos/create')
    .send({
      horarioPos: "2015-04-23T18:25:43.511Z",
      horarioPre: "2014-04-23T18:25:43.511Z",
      pasPre: 30,
      pasPos:31,
      padPre:28,
      padPos:29,
      glicemiaPre: 26,
      glicemiaPos: 27,
      horarioTreino: 20,
      pseEPre: 40,
      pseEPos: 41,
      observacao: "teste",
      studentId: studentId,
    })
    .set('Authorization', `Bearer ${token}`)

    id = response.body.id;

    return await server
      .get(`/prepos/get/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});