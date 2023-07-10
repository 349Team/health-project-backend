import { Test, TestingModule } from '@nestjs/testing';
import { avdStrategy } from './avd.strategy';

describe('avdStrategy', () => {
    let service: avdStrategy;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [avdStrategy],
        }).compile();

        service = module.get<avdStrategy>(avdStrategy);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
