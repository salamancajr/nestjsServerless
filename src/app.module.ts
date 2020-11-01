import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module';
import { ScheduleModule } from './schedule/schedule.module';
import { BaggageModule } from './baggage/baggage.module';
import { lambdaWrapper } from './utils/lambdaWrapper';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TicketsModule,
    ScheduleModule,
    BaggageModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://salamancajr:v2i4C5ntXhrmG*D@cluster0.lhppp.mongodb.net/flights?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
