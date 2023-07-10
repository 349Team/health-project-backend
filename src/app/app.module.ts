import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrePosModule } from 'src/modules/domain/prePos/prePos.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseModule } from 'src/modules/infrastructure/database/database.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { EvaluationModule } from 'src/modules/domain/evaluations/evaluation.module';
import { StudentModule } from 'src/modules/domain/student/student.module';

@Module({
  imports: [
    AuthModule,
    EvaluationModule,
    DatabaseModule,
    StudentModule,
    UserModule,
    PrePosModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
