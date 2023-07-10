import { Test, TestingModule } from '@nestjs/testing';
import { BodyCompositionFactory } from './body-composition.factory';

describe('BodyCompositionFactory', () => {
  let service: BodyCompositionFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyCompositionFactory],
    }).compile();

    service = module.get<BodyCompositionFactory>(BodyCompositionFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
