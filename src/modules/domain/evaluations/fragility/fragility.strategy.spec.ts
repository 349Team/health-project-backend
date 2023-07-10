import { Test, TestingModule } from '@nestjs/testing';
import { FragilityStrategy } from './fragility.strategy';

describe('FragilityStrategy', () => {
  let service: FragilityStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragilityStrategy],
    }).compile();

    service = module.get<FragilityStrategy>(FragilityStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
