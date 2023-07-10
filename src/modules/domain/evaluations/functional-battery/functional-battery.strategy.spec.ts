import { Test, TestingModule } from '@nestjs/testing';
import { FunctionalBatteryStrategy} from './functional-battery.strategy';

describe('FunctionalBatteryStrategy', () => {
    let service: FunctionalBatteryStrategy;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [FunctionalBatteryStrategy],
      }).compile();
  
      service = module.get<FunctionalBatteryStrategy>(
        FunctionalBatteryStrategy,
      );
    });
  
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });
  