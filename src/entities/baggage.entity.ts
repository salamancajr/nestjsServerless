import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Baggage extends Document {
  @Prop()
  weight: number;

  @Prop()
  flight: string;

  @Prop()
  passenger: string;
}

export const BaggageSchema = SchemaFactory.createForClass(Baggage);
