import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrePos } from './entities/prePos.entity';
import { PrePosController } from './prePos.controller';
import { PrePosService } from './prePos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PrePos])],
  controllers: [PrePosController],
  providers: [PrePosService],
  exports: [TypeOrmModule],
})
export class PrePosModule {}
