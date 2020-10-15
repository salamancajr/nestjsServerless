// /* eslint-disable @typescript-eslint/no-empty-function */
// import { Test, TestingModule } from '@nestjs/testing';
// import { BaggageService } from './baggage.service';
// import { Connection, Repository } from 'typeorm';
// import { Baggage, BaggageSchema } from '../entities/baggage.entity';
// import { getModelToken } from '@nestjs/mongoose';
// import faker from 'faker';
// import { CreateBaggageDto } from 'src/dto/create-baggage.dto';
// import { Model } from 'mongoose';
// import { Inject } from '@nestjs/common';

// describe('BaggageService', () => {
//   let service: BaggageService;
//   let repository: Model<Baggage>;

//   beforeEach(async () => {
//     class BaggageRepositoryFake {
//       data: CreateBaggageDto;
//       constructor(dto: CreateBaggageDto) {
//         this.data = dto;
//         return this;
//       }
//       public async save(): Promise<CreateBaggageDto> {
//         return this.data;
//       }
//       public async remove(): Promise<void> {}
//       public async findOne(): Promise<string> {
//         return 'hello';
//       }
//     }

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         BaggageService,
//         {
//           provide: Connection,
//           useValue: {},
//         },
//         {
//           provide: getModelToken(Baggage.name),
//           useClass: BaggageRepositoryFake,
//         },
//       ],
//     }).compile();

//     service = module.get<BaggageService>(BaggageService);
//     repository = module.get(getModelToken(Baggage.name));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//     expect(repository).toBeDefined();
//   });

//   it('calls the repository with the correct params', async () => {
//     const createBaggageData: CreateBaggageDto = {
//       weight: 100,
//       flight: 'AS123',
//       passenger: 'Tim',
//     };

//     const savedBag = new repository(createBaggageData);
//     const baggageRepositorySaveSpy = jest
//       .spyOn(savedBag, 'save')
//       .mockResolvedValue(createBaggageData);

//     const baggageRepositoryConstructorSpy = jest
//       .spyOn(repository, 'constructor')
//       .mockReturnValue(savedBag);

//     console.log('cons', new repository(createBaggageData).findOne());
//     const result = await service.createOne(createBaggageData);

//     expect(baggageRepositoryConstructorSpy).toBeCalledWith(createBaggageData);
//     // expect(baggageRepositorySaveSpy).toBeCalledWith(savedBag);
//     expect(result).toEqual(createBaggageData);

//     const mock = jest.fn();
//     [1].map(x => mock(x));
//     expect(mock).toBeCalledWith(expect.any(Number));
//   });
// });
