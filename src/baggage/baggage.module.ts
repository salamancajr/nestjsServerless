import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaggageController } from './baggage.controller';
import { BaggageService } from './baggage.service';
import { ConfigModule } from '@nestjs/config';
import { Baggage, BaggageSchema } from '../schemas/baggage.schema';
import { lambdaWrapper } from '../utils/lambdaWrapper';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // need to make mongoose aware of schema inside this child module
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Baggage.name, schema: BaggageSchema }]),
  ],
  controllers: [BaggageController],
  providers: [BaggageService],
})
export class BaggageModule {}

export const handler = lambdaWrapper(BaggageModule);
