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

describe('Criar avaliações de Depressão', () => {
    it(`/:studentId (CREATE) sucesso na criação`, async () => {
        return await server
          .post(`/evaluation/${studentId}`)
          .send({
            "type": "Depression",
            "data": {
                "date" : "2022-11-10T03:00:00.000Z",
                "campo1" : true,
                "campo2" : false,
                "campo3" : false,
                "campo4" : false,
                "campo5" : false,
                "campo6" : true,
                "campo7" : false,
                "campo8" : false,
                "campo9" : false,
                "campo10" : true,
                "campo11" : true,
                "campo12" : false,
                "campo13" : false,
                "campo14" : false,
                "campo15" : true,
                "result" : 5
            }
          })
          .set('Authorization', `Bearer ${token}`)
          .expect(201);
      });
});