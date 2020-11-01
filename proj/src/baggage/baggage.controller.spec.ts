import { Test, TestingModule } from '@nestjs/testing';
import { BaggageController } from './baggage.controller';

describe('BaggageController', () => {
  let controller: BaggageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaggageController],
    }).compile();

    controller = module.get<BaggageController>(BaggageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
