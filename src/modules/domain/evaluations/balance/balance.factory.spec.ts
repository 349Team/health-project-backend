import { Test, TestingModule } from '@nestjs/testing';
import { BalanceFactory } from './balance.factory';

describe('BalanceFactory', () => {
  let service: BalanceFactory;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalanceFactory],
    }).compile();

    service = module.get<BalanceFactory>(BalanceFactory);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
});