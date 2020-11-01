import { Injectable } from '@nestjs/common';
import { CreateBaggageDto } from 'src/dto/create-baggage.dto';
import { Baggage } from '../schemas/baggage.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class BaggageService {
  constructor(
    // private readonly configService: ConfigService,
    // @Inject('TEST') private readonly testArray: string[],
    @InjectModel(Baggage.name)
    private readonly baggageModel: Model<Baggage>,
  ) {}
  async findAll() {
    return this.baggageModel.find();
  }
  findOne(id: string) {
    return this.baggageModel.findOne(id);
  }
  createOne(createBaggage: CreateBaggageDto) {
    const baggage = new this.baggageModel(createBaggage);
    return baggage.save();
  }
}
