import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app/app.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Health Project UTFPR')
    .setDescription(
      'Projeto desenvolvido durante materia de Projeto Integrado e Engenharia de Software 1 na UTFPR.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: process.env.CORS_WHITELIST.split(','),
  });

  await app.listen(process.env.PORT, () =>
    console.log(`Server started on port: ${process.env.PORT}`),
  );
}

bootstrap();
