import { Test, TestingModule } from '@nestjs/testing';
import { MiniCognitionStrategy } from './mini-cognition.strategy';

describe('MiniCognitionStrategy', () => {
  let service: MiniCognitionStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniCognitionStrategy],
    }).compile();

    service = module.get<MiniCognitionStrategy>(MiniCognitionStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
