import { Test, TestingModule } from '@nestjs/testing';
import { FragilityFactory } from './fragility.factory';

describe('FragilityFactory', () => {
  let service: FragilityFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FragilityFactory],
    }).compile();

    service = module.get<FragilityFactory>(FragilityFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
