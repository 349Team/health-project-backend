import { Test, TestingModule } from '@nestjs/testing';
import { BalanceStrategy } from './balance.strategy';

describe('BalanceStrategy', () => {
    let service: BalanceStrategy;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BalanceStrategy],
        }).compile();

        service = module.get<BalanceStrategy>(BalanceStrategy);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});