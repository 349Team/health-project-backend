import { Test, TestingModule } from '@nestjs/testing';
import { DepressionStrategy } from './depression.strategy';

describe('DepressionStrategy', () => {
  let service: DepressionStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepressionStrategy],
    }).compile();

    service = module.get<DepressionStrategy>(
      DepressionStrategy,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
