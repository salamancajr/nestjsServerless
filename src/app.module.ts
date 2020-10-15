import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { ScheduleModule } from './schedule/schedule.module';
import { BaggageModule } from './baggage/baggage.module';
import { lambdaWrapper } from './utils/lambdaWrapper';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketsModule,
    ScheduleModule,
    BaggageModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
export async function handler() {
  return lambdaWrapper(AppModule);
}
