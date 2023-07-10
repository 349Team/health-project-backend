import { Test, TestingModule } from '@nestjs/testing';
import { SarcopeniaStrategy } from './sarcopenia.strategy';

describe('SarcopeniaService', () => {
  let service: SarcopeniaStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SarcopeniaStrategy],
    }).compile();

    service = module.get<SarcopeniaStrategy>(SarcopeniaStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
