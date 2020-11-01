/* eslint-disable @typescript-eslint/no-empty-function */
import { Test, TestingModule } from '@nestjs/testing';
import { BaggageService } from './baggage.service';
import {
  Baggage,
  BaggageRepositoryFake,
  BaggageSchema,
} from '../schemas/baggage.schema';
import { CreateBaggageDto } from 'src/dto/create-baggage.dto';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import mockingoose from 'mockingoose';

describe('BaggageService', () => {
  let service: BaggageService;
  let repository: Model<Baggage>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BaggageService,
        {
          provide: getModelToken(Baggage.name),
          useValue: BaggageRepositoryFake,
        },
      ],
    }).compile();

    service = module.get(BaggageService);
    repository = module.get(getModelToken(Baggage.name));
  });

  it('service returns the correct value', async () => {
    const createBaggageData: CreateBaggageDto = {
      weight: 100,
      flight: 'AS123',
      passenger: 'Tim',
    };

    const baggageRepositorySaveSpy = jest.spyOn(repository, 'constructor');

    const rep = new repository();

    const createdBaggageEntity = Baggage.of(createBaggageData);

    const savedBaggage = Baggage.of({
      ...createBaggageData,
    });
    const baggageRepositoryCreateSpy = jest
      .spyOn(service, 'createOne')
      .mockReturnValue(createdBaggageEntity);
    const result = await service.createOne(createdBaggageEntity);

    expect(baggageRepositoryCreateSpy).toBeCalledWith(createdBaggageEntity);
    expect(baggageRepositorySaveSpy).toBeCalled();
    expect(result).toEqual(savedBaggage);
  });
});
