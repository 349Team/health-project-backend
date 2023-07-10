import { Test, TestingModule } from '@nestjs/testing';
import { DepressionFactory } from './depression.factory';

describe('DepressionFactory', () => {
  let service: DepressionFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepressionFactory],
    }).compile();

    service = module.get<DepressionFactory>(
      DepressionFactory,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
