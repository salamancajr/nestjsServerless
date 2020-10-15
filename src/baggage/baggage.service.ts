import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBaggageDto } from 'src/dto/create-baggage.dto';
import { Baggage } from '../entities/baggage.entity';
@Injectable()
export class BaggageService {
  constructor(
    // private readonly configService: ConfigService,
    // @Inject('TEST') private readonly testArray: string[],
    @InjectModel(Baggage.name) private readonly baggageModel: Model<Baggage>,
  ) {}
  async findAll() {
    const res = await this.baggageModel.find();
    console.log('baggageModel', res);
    return this.baggageModel.find();
  }
  findOne(id: string) {
    return this.baggageModel.findById(id);
  }
  createOne(createBaggage: CreateBaggageDto) {
    return new this.baggageModel(createBaggage).save();
  }
}
