import { CreateBaggageDto } from '../dto/create-baggage.dto';
import { BaggageService } from './baggage.service';
export declare class BaggageController {
    private readonly baggageService;
    constructor(baggageService: BaggageService);
    findAll(): Promise<any>;
    tester(): string;
    findOne(id: string): string;
    create(createBaggageDto: CreateBaggageDto): any;
}
