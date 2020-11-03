/* eslint-disable @typescript-eslint/no-empty-function */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Baggage extends Document {
  @Prop()
  weight: number;

  @Prop()
  flight: string;

  @Prop()
  passenger: string;

  public static of(params: Partial<Baggage>): Baggage {
    const baggage = new Baggage();

    Object.assign(baggage, params);

    return baggage;
  }
}

export class BaggageRepositoryFake {
  constructor() {}
  public async save(): Promise<string> {
    return 'hello';
  }
  public async remove(): Promise<void> {}
  public async findOne(): Promise<void> {}
}

export const BaggageSchema = SchemaFactory.createForClass(Baggage);
