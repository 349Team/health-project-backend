import { Test, TestingModule } from '@nestjs/testing';
import { BodyCompositionStrategy } from './body-composition.strategy';

describe('BodyCompositionStrategy', () => {
  let service: BodyCompositionStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyCompositionStrategy],
    }).compile();

    service = module.get<BodyCompositionStrategy>(BodyCompositionStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
