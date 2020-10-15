import { lambdaWrapper } from './utils/lambdaWrapper';
import { ScheduleModule } from './schedule/schedule.module';

export const handler = lambdaWrapper(ScheduleModule);
