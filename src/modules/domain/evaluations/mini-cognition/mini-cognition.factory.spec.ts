import { Test, TestingModule } from '@nestjs/testing';
import { MiniCognitionFactory } from './mini-cognition.factory';
describe('MiniCognitionFactory', () => {
  let service: MiniCognitionFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniCognitionFactory],
    }).compile();

    service = module.get<MiniCognitionFactory>(MiniCognitionFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
