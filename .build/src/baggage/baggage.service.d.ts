import { CreateBaggageDto } from 'src/dto/create-baggage.dto';
import { Baggage } from '../schemas/baggage.schema';
import { Model } from 'mongoose';
export declare class BaggageService {
    private readonly baggageModel;
    constructor(baggageModel: Model<Baggage>);
    findAll(): Promise<any>;
    findOne(id: string): any;
    createOne(createBaggage: CreateBaggageDto): any;
}
