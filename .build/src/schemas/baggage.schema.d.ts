export declare class Baggage {
    weight: number;
    flight: string;
    passenger: string;
    static of(params: Partial<Baggage>): Baggage;
}
export declare class BaggageRepositoryFake {
    constructor();
    save(): Promise<string>;
    remove(): Promise<void>;
    findOne(): Promise<void>;
}
export declare const BaggageSchema: any;
