import { Test, TestingModule } from '@nestjs/testing';
import { avdFactory } from './avd.factory';

describe('avdFactory', () => {
    let service: avdFactory;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [avdFactory],
        }).compile();

        service = module.get<avdFactory>(avdFactory);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});