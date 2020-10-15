import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaggageController } from './baggage.controller';
import { BaggageService } from './baggage.service';
import { ConfigModule } from '@nestjs/config';
import { BaggageSchema, Baggage } from '../entities/baggage.entity';

@Module({
  // need to make mongoose aware of schema inside this child module
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Baggage.name,
        schema: BaggageSchema,
      },
    ]),
  ],
  controllers: [BaggageController],
  providers: [BaggageService],
})
export class BaggageModule {}
