import { Test, TestingModule } from '@nestjs/testing';
import { FunctionalBatteryFactory } from './functional-battery-factory';

describe('FunctionalBatteryFactory', () => {
  let service: FunctionalBatteryFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionalBatteryFactory],
    }).compile();

    service = module.get<FunctionalBatteryFactory>(
      FunctionalBatteryFactory
      );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});