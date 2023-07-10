import { Test, TestingModule } from '@nestjs/testing';
import { SarcopeniaFactory } from './sarcopenia.factory';

describe('SarcopeniaFactory', () => {
  let service: SarcopeniaFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SarcopeniaFactory],
    }).compile();

    service = module.get<SarcopeniaFactory>(SarcopeniaFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
