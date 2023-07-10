import { Test, TestingModule } from '@nestjs/testing';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity.factory';

describe('CardiorespiratoryCapacityFactory', () => {
  let service: CardiorespiratoryCapacityFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardiorespiratoryCapacityFactory],
    }).compile();

    service = module.get<CardiorespiratoryCapacityFactory>(
      CardiorespiratoryCapacityFactory,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
