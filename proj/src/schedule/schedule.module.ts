import { Module } from '@nestjs/common';
import { lambdaWrapper } from '../utils/lambdaWrapper';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}

export const handler = lambdaWrapper(ScheduleModule);
